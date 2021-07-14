const fs = require('fs');
function init(){
    const fileRead = fs.readFileSync('./custom-elements.json','utf-8');
    const readMe = fs.readFileSync('./README.md','utf-8');
    const customElements = JSON.parse(fileRead);
    
    const items = customElements.modules.map(item => {
        return item.exports.map(exportItem => {
            return `- [${exportItem.name.replace('Squid','')}](./${exportItem.declaration.module})`
        });
    }).flat();
    const currentComp = readMe.slice(0,readMe.indexOf('## Current components') + 22);
    const localDev = readMe.slice(readMe.indexOf('## Local development'));
    const newReadMe = `${currentComp}

${items.join('\n')}

${localDev}
    `;
    fs.writeFileSync('./README.md', newReadMe);
}

init();