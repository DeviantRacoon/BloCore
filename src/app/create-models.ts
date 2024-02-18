import * as fs from 'fs';
import path from 'path';
import { templates } from './templates/template';

async function generateFiles(moduleName: string, name: string) {
    let validModule =  fs.existsSync(`src/modules/${moduleName}`);
    
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

if (process.argv.length === 4) {
    const moduleName = process.argv[2];
    const name = process.argv[3];

    generateFiles(moduleName, name);
} else {
    console.error('Usage: npm run create [moduleName] [name]');
}