import { Container } from 'ditox';
import { bindMultipipeApp } from '@shieldmaidengames/multipipe-server';

export function bindHosted(container: Container): void {
    bindMultipipeApp(container);
}