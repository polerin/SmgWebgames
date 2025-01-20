import IHostedApplication from './IHostedApplication.js';

export default interface IHostedApplications {
    [appSlug: string]: IHostedApplication;
};