import { ReactiveController } from 'lit';
import IInjectableHost from './injectable_host.js';
import { ComponentDependencies } from '../types/index.js';

export default interface IInjectableController<DependencyType extends ComponentDependencies> extends ReactiveController {
    addHost(host: IInjectableHost<DependencyType>): void;
}