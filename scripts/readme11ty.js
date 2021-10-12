const fs = require('fs');

const buildData = (file) => {
    return `
exports.data = {
    title:"${file}",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    `
}
const buildEvents = (events) =>{
    if(events){
        const eventHtml = events.map(item => `|${item.name}|${item.description}|` ).join('\n');
        return `\n\n|Name|Description|\n|----|----------|\n${eventHtml}`;
    }
    return '';
}
const buildExamples = (examples) => {
    return md.render(`## Example \n\n \`\`\`html \n ${examples}\n\`\`\``);
}
const buildMembers = (members) => {
    const membersMD = members.filter(member => member.kind === 'field').map(member => `|${member.name}|${member?.type?.text}|${member.kind}|${member?.description?.replace('{String} -','').replace('{Boolean} -','')}|`).join('\n');
    return  `\n\n|Name|Type|Kind|Description|\n|----|----|-----|----------|\n${membersMD}`;
}
const buildMethods  = (members) => {
    const membersMD = members.filter(member => member.kind === 'method').map(member => `|${member.name}|${member.kind}|${member?.description?.replace('{String} -','').replace('{Boolean} -','')}|`).join('\n');
    return  `\n\n|Name|Kind|Description|\n|----|-----|----------|\n${membersMD}`;
}
function init(){
    const fileRead = fs.readFileSync('./custom-elements.json','utf-8');
    const customElements = JSON.parse(fileRead);
    customElements.modules.forEach(module => {
        module.declarations.forEach(declaration =>{
            try {
                if(declaration.tagName){
                    fs.writeFileSync(`./11ty/markdown/${declaration.tagName}.md`,`
# ${declaration.name}

## Details

${declaration.summary}

## Inherits

\`${declaration.name}\` inherits from [${declaration.superclass.name}](${declaration.superclass.module})

## Attributes
${buildMembers(declaration.members)}

## Public API
${buildMethods(declaration.members)}

## Events
${buildEvents(declaration.events)}

## Usage

\`\`\`html
${declaration.example}
\`\`\`

`);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });
}
init();