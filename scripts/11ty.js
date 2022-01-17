import fs from 'fs';
// const MarkdownIt = require('markdown-it');
import hljs from 'highlight.js';
import system from 'markdown-it';
const md = system({
            highlight: (str,language) =>{
                if(language && hljs.getLanguage(language)){
                    try {
                        return hljs.highlight(str,{ language}).value
                    } catch (__) {
                        
                    }
                }
                return '';
            }
        });
const buildData = (file) => {
    return `
exports.data = {
    title:"${file}",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    `
}
const buildTitle = (title) => {
    return `<div class='sink'><h1>${title}</h1>`
}
const buildSummary = (summary) => {
    return `<h2>Description</h2> ${md.render(summary)}`;
}
const buildRender = () =>{
    return `exports.render = (data) =>`;
}
const buildExamples = (examples) => {
    return md.render(`## Example \n\n \`\`\`html \n ${examples}\n\`\`\``);
}
const buildMembers = (members) => {
    const membersMD = members.filter(member => member.kind === 'field').map(member => `|${member.name}|${member?.type?.text}|${member.kind}|${member?.description?.replace('{String} -','').replace('{Boolean} -','')}|`).join('\n');
    return  md.render(`## Attributes \n\n |Name|Type|Kind|Description|\n|----|----|-----|----------|\n${membersMD}`);
}
const buildMethods  = (members) => {
    const membersMD = members.filter(member => member.kind === 'method').map(member => `|${member.name}|${member.kind}|${member?.description?.replace('{String} -','').replace('{Boolean} -','')}|`).join('\n');
    return  md.render(`## Methods \n\n |Name|Kind|Description|\n|----|-----|----------|\n${membersMD}`);
}
function init(){
    const fileRead = fs.readFileSync('./custom-elements.json','utf-8');
    const customElements = JSON.parse(fileRead);
    customElements.modules.forEach(module => {
        module.declarations.forEach(declaration =>{
            try {
                if(declaration.tagName){
                    fs.writeFileSync(`./11ty/components/${declaration.tagName}.11ty.js`,`
    ${buildData(declaration.tagName)}
    ${buildRender()}\`
    ${buildTitle(declaration.tagName)}
    ${buildSummary(declaration.summary)}
    ${buildMembers(declaration.members)}
    ${buildMethods(declaration.members)}
    ${buildExamples(declaration.example)}
    <hr>
    <div>
    ${declaration.example} 
    </div>
    </div>
                    \`;
                    `);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });
}
init();