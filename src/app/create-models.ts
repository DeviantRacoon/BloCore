import * as fs from 'fs';
import path from 'path';
import { templates } from './templates/template';

function generateFiles(moduleName: string, name: string) {
    let validModule = fs.existsSync(`src/modules/${moduleName}`);

    if (!validModule) {
        console.error(`Error: Module '${moduleName}' not found.`);
        return;
    }

    let outName = name[0].toLocaleLowerCase() + name.slice(1);
    for (let template of templates) {
        try {
            const templateContent = fs.readFileSync(template.templatePath, 'utf-8');

            const outputPath = template.outputPath(moduleName, outName);
            const outputFileName = path.basename(outputPath);

            let content = templateContent
                .replace(/\{className\}/g, name)
                .replace(/\{varName\}/g, name[0].toLowerCase() + name.slice(1));

            if (template.fileExtension === ".usecase") {
                fs.mkdirSync(`src/modules/${moduleName}/application/usecases/${outName}`);
            }

            fs.writeFileSync(outputPath, content);
            console.log(`${outputFileName} generated successfully.`);

        } catch (error) {
            console.error(`Error generating file ${template.fileExtension}:`, error);
        }
    }
}

function createModule(nameModule: string) {
    let directory = `src/modules/${nameModule}`;

    try {
        fs.mkdirSync(directory);
        fs.mkdirSync(directory + '/domain');
        fs.mkdirSync(directory + '/application');
        fs.mkdirSync(directory + '/infrastructure');
        fs.mkdirSync(directory + '/application/usecases');
        fs.mkdirSync(directory + '/application/factories');
        fs.mkdirSync(directory + '/domain/entities');
        fs.mkdirSync(directory + '/domain/repositories');
        fs.mkdirSync(directory + '/infrastructure/adapters');
        fs.mkdirSync(directory + '/infrastructure/models');
        fs.mkdirSync(directory + '/infrastructure/res');
        fs.mkdirSync(directory + '/infrastructure/res/controllers');
        fs.mkdirSync(directory + '/infrastructure/res/routes');
        console.log(`Module ${nameModule} created successfully.`);

    } catch (error) {
        console.error(`Error generating module:`, error);

    }
}

if (process.argv.length >= 4) {
    const type = process.argv[2];
    const name = process.argv[3];
    const moduleName = process.argv[4];

    if (type === 'module') {
        createModule(name);

    } else if (type === 'models') {
        console.log(moduleName, name);
        generateFiles(moduleName, name);

    } else {
        console.error(`Error: Invalid type. Please use 'module' or 'models'.`);
    }

} else {
    console.error(`Incorrect usage. Please follow the format:
    npm run create [module / models] [name] [moduleName]
  
  Example usage:
    npm run create module myModule
    or
    npm run create models myModel myModule`);
}