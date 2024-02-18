import * as fs from 'fs';

const module = process.argv[2];
const name = parseInt(process.argv[3]);

async function generateFiles(className: string, template: string, path: string) {
    try {
        const templatePath = `./templates/${template}`;
        let userClassCode = await fs.promises.readFile(templatePath, 'utf-8');

        userClassCode = userClassCode.replace(/\{className\}/g, className)
                                     .replace(/\{varName\}/g, className.toLocaleLowerCase());
        
        await fs.promises.writeFile(`${path}/${className}.ts`, userClassCode);
        console.log(`${className}.ts generado exitosamente`);
    } catch (error) {
        console.error('Error al generar el archivo de clase:', error);
    }
}

const moduleDir = __dirname + '/../modules/';

generateFiles('model-template.txt', 'User', moduleDir + 'infrastructure/models')
generateFiles('entity-template.txt', 'User', moduleDir + 'domain/entities')
generateFiles('factory-template.txt', 'User', moduleDir + 'application/factories')
generateFiles('adapter-template.txt', 'User', moduleDir + 'infrastructure/adapters')
generateFiles('repository-template.txt', 'User', moduleDir + 'domain/repositories')
generateFiles('usecase-template.txt', 'User', moduleDir + 'application/usecases/' + name)
generateFiles('index-usecase-template.txt', 'User', moduleDir + 'application/usecases/' + name)
generateFiles('controller-template.txt', 'User', moduleDir + 'infrastructure/res/controller')
generateFiles('router-template.txt', 'User', moduleDir + 'infrastructure/res/routes')
