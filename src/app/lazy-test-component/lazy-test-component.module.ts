import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyTestComponent } from './lazy-test-component.component';

@NgModule({
  bootstrap: [LazyTestComponent],
  declarations: [LazyTestComponent],
  imports: [CommonModule]
})
export class LazySnackbarModule {}
