import { IHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared';
import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';
import { HostedAppStatusReport } from '@shieldmaidengames/webgames-internal-shared';
import { HostedAppMapEntry } from './types.js';
import { Container } from 'ditox';


export default class ApplicationHost {

    protected knownApps: Record<SmgHostedAppSlug, HostedAppMapEntry> = {};

    public constructor(apps: IHostedApplication[]) {
        apps.forEach(this.addAppToMap);
    }

    /**
     * Bootstrap all supplied applications
     */
    public async boostrapAllApps(container: Container): Promise<HostedAppStatusReport[]> {
        await Promise.all(
            Object.values(this.knownApps).map(
                (appEntry) => this.bootstrapApp(appEntry.app, container)
            )
        );

        return this.reportHostedStatus();
    }

    public reportHostedStatus(slug?: SmgHostedAppSlug): HostedAppStatusReport[] {
        if (slug === undefined) {
            return Object.values(this.knownApps).map((app) => this.reportSingleAppStatus(app));
        }

        if (this.knownApps[slug] === undefined) {
            console.warn(`Attempting to report on an unknown app: ${slug}`);

            return [];
        }

         return [this.reportSingleAppStatus(this.knownApps[slug]) ];
    }

    protected async bootstrapApp(app: IHostedApplication, container: Container): Promise<void> {
            try {
                await app.register(container);
            } catch (e: unknown) {
                const message = e instanceof Error ? e.message : <string>e;
                console.error(`Error bootstrapping hosted application: ${message}`);
            }
    }

    protected addAppToMap = (app: IHostedApplication): void => {
        console.info(`Adding ${app.slug} to known hosted applications`);
        this.knownApps[app.slug] = {app};
    };

    protected reportSingleAppStatus(appEntry: HostedAppMapEntry): HostedAppStatusReport { 
        const status: HostedAppStatusReport = {
            appName: appEntry.app.slug,
            status: appEntry.app.status,
            failureReason: appEntry.failureReason,
            failureCode: appEntry.failureCode, 
        };

        return status;
    }
}