import { LitElement } from 'lit';
export default interface IInjectableHost<DependencyType> extends LitElement {
    inject(deps: DependencyType): void;
}
//# sourceMappingURL=injectable_host.d.ts.map