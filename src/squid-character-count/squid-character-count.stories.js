import '../../dist/squid-character-count/squid-character-count.js';
//import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    return `<input aria-describedby="test" maxlength='${args.inputMax}' id="inputone" aria-label='inputone'>
    <squid-character-count count="${args.count}" max="${args.max}" id="test"></squid-character-count>`;
};

export const characterCount = temp.bind({});
characterCount.args ={
    inputMax:'',
    max:'',
};
characterCount.story = {
    name: 'character-count',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    