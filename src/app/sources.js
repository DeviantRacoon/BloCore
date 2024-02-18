const extensionFiles = {
    'controller-template.txt': '.controller',
    'router-template.txt': '.routes',
    'model-template.txt': '',
    'adapter-template.txt': '.adapter',
    'entity-template.txt': '.entity',
    'factory-template.txt': '.factory',
    'usecase-template.txt': '.usecase',
    'index-usecase-template.txt': '.index',
    'repository-template.txt': '.repository'
}

function getFileName(name, template) {
    let fileName = name.replace(/([a-z])([A-Z])/g, '$1.$2').toLowerCase()
    return `${fileName}${extensionFiles[template]}`
}

const fs = require('fs');

async function generateFiles(template, className, path) {
    try {
        const templatePath = __dirname + `/templates/${template}`;
        let userClassCode = await fs.promises.readFile(templatePath, 'utf-8');

        userClassCode = userClassCode
            .replace(/\{className\}/g, className)
            .replace(/\{varName\}/g, className[0].toLowerCase() + className.slice(1));

        let fileName = getFileName(className, template);
        await fs.promises.writeFile(`${path}/${fileName}.ts`, userClassCode);
        console.log(`${fileName}.ts generado exitosamente`);

    } catch (error) {
        console.error('Error al generar el archivo de clase:', error);
    }
}
const moduleName = process.argv[2];
const name = process.argv[3];
const moduleDir = __dirname + '/../modules/' + moduleName + '/';

generateFiles('model-template.txt', name, moduleDir + 'infrastructure/models')
generateFiles('controller-template.txt', name, moduleDir + 'infrastructure/res/controllers')
generateFiles('router-template.txt', name, moduleDir + 'infrastructure/res/routes')

generateFiles('entity-template.txt', name, moduleDir + 'domain/entities')
generateFiles('factory-template.txt', name, moduleDir + 'application/factories')
generateFiles('adapter-template.txt', name, moduleDir + 'infrastructure/adapters')
generateFiles('repository-template.txt', name, moduleDir + 'domain/repositories')

let nameFolder = name[0].toLowerCase() + name.slice(1)
fs.mkdirSync(moduleDir + 'application/usecases/' + nameFolder, { recursive: true });
generateFiles('usecase-template.txt', name, moduleDir + 'application/usecases/' + nameFolder)
generateFiles('index-usecase-template.txt', name, moduleDir + 'application/usecases/' + nameFolder)


