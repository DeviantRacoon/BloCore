interface TemplateDefinition {
    fileExtension: string;
    templatePath: string;
    outputPath: (moduleName: string, name: string) => string;
    replacementTokens: { [key: string]: string | RegExp };
}

export const templates: TemplateDefinition[] = [
    {
        fileExtension: '.entity',
        templatePath: __dirname + "/entity-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/domain/entities/${name}.entity.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.controller',
        templatePath: __dirname + "/controller-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/infrastructure/res/controllers/${name}.controller.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.routes',
        templatePath: __dirname + "/router-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/infrastructure/res/routes/${name}.routes.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.model',
        templatePath: __dirname + "/model-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/infrastructure/models/${name}.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.adapter',
        templatePath: __dirname + "/adapter-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/infrastructure/adapters/${name}.adapter.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.factory',
        templatePath: __dirname + "/factory-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/application/factories/${name}.factory.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.usecase',
        templatePath: __dirname + "/usecase-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/application/usecases/${name}/${name}.usecase.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.index',
        templatePath: __dirname + "/index-usecase-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/application/usecases/${name}/index.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
    {
        fileExtension: '.repository',
        templatePath: __dirname + "/repository-template.txt",
        outputPath: (moduleName: string, name: string) => `${__dirname}/../../modules/${moduleName}/domain/repositories/${name}.repository.ts`,
        replacementTokens: { '{className}': '{className}', '{varName}': '{varName}' },
    },
];
