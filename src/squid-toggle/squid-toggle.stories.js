
import '../../dist/squid-toggle/squid-toggle.js';
//import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    return `<squid-toggle ${args.checked?'checked':''} ${args.disabled?'disabled':''}>${args.label}</squid-toggle>`;
};

export const toggle = temp.bind({});
toggle.args ={
    label:'Toggle Alerts',
    checked:false,
    disabled:false,
  
};
toggle.story = {
    name: 'toggle',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    