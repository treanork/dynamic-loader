import {
  Compiler,
  ComponentRef,
  Injectable,
  Injector,
  NgModuleFactory,
  Type,
  ViewContainerRef
} from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicModuleLoaderService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  public loadComponentAndModule(
    component: Type<any>,
    module: any,
    viewContainerRef: ViewContainerRef,
    inputs?: any
  ): Promise<ComponentRef<any>> {
    return this.loadModuleFactory(module)
      .then((moduleFactory) => this.loadModuleFactory(moduleFactory))
      .then((moduleFactory) => moduleFactory.create(this.injector))
      .then((moduleRef) => moduleRef.componentFactoryResolver.resolveComponentFactory(component))
      .then((factory) => viewContainerRef.createComponent(factory))
      .then((componentRef: ComponentRef<any>) => {
        if (inputs) {
          for (const key of Object.keys(inputs)) {
            componentRef.instance[key] = inputs[key];
          }
        }
        componentRef.changeDetectorRef.detectChanges();
        return componentRef;
      });
  }

  public loadOnlyModule(
    module: any
  ): void {
    this.loadModuleFactory(module)
      .then((moduleFactory) => this.loadModuleFactory(moduleFactory))
      .then((moduleFactory) => moduleFactory.create(this.injector))
  }

  private loadModuleFactory(t: any): Promise<NgModuleFactory<any>> {
    if (t instanceof NgModuleFactory) {
      return of(t).toPromise();
    }

    return from(this.compiler.compileModuleAsync(t)).toPromise();
  }
}
