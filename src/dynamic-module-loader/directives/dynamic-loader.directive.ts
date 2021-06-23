import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

import { DynamicLoaderChunk } from '../models';
import { DynamicModuleLoaderService } from '../service';


@Directive({
    selector: 'dynamic-loader'
})
export class DynamicLoaderDirective implements OnInit {
    @Input() public chunk!: DynamicLoaderChunk;
    @Input() public inputs?: any;
    @Input() public shouldAttachToView = true;

    constructor(
        private dynamicLoaderService: DynamicModuleLoaderService,
        private vcr: ViewContainerRef
    ) { }

    public ngOnInit(): void {
        this.chunk.moduleImport.then((module) => {
            this.vcr.clear();
            this.dynamicLoaderService.loadComponentAndModule(
                module[this.chunk.componentName],
                module[this.chunk.moduleName],
                this.vcr,
                this.inputs
            );
        }
        )
    }
}