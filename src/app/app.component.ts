import { Component } from '@angular/core';
import { DynamicLoaderChunk } from 'src/dynamic-module-loader/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loader-app';
  public textToPassThrough = 'I have been passed from the component'
  public testChunk: DynamicLoaderChunk = {
    componentName: 'LazyTestComponent',
    moduleName: 'LazySnackbarModule',
    moduleImport: import('./lazy-test-component')
  };
}
