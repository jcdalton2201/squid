
import '../../dist/squid-combobox/squid-combobox.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    const element = document.createElement('squid-combobox');
    element.data = args.data;
    element.innerHTML = `<span slot='label'>${args.label}</span>`;
    return element;
};

export const combobox = temp.bind({});
combobox.args ={
    label:'Star Wars',
    data:['Harry Potter','Ron Weasley','Hermione Granger','Albus Dumbledore','Severus Snape','Sirius Black','Voldemort']
  
};
combobox.story = {
    name: 'combobox',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    