import { NgModule } from '@angular/core';

import { DynamicLoaderDirective } from './dynamic-loader.directive';

@NgModule({
  declarations: [DynamicLoaderDirective],
  exports: [DynamicLoaderDirective]
})
export class DynamicLoaderModule {}