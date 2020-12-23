
import '../../dist/squid-checkbox/squid-checkbox.js';
import readme from './readme.md';
export default {
    title: 'checkbox'
};

const temp = (args) => {
    return `<squid-checkbox ${args.checked?'checked':''} ${args.disabled?'disabled':''}>${args.label}</squid-checkbox`;
};

export const checkbox = temp.bind({});
checkbox.args ={
    label:'Checkbox',
    checked:false,
    disabled:false,
  
};
checkbox.story = {
    name: 'checkbox-input',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    