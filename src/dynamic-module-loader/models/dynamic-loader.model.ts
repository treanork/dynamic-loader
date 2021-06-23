export interface DynamicLoaderChunk {
    componentName: string;
    moduleName: string;
    moduleImport: Promise<any>;
};

export interface ComponentModel {
    
}