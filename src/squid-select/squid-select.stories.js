
import '../../dist/squid-select/squid-select.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    const element = document.createElement('squid-select');
    element.data = args.data.map(item => `<option value="${item}">${item}</option>`);
    element.innerHTML = `<span slot='label'>${args.label}</span>${element.data.join('')}`;
    element.value = args.value;
    return element;
};

export const select = temp.bind({});
select.args ={
    label:'JK',
    data:['Harry Potter','Ron Weasley','Hermione Granger','Albus Dumbledore','Severus Snape','Sirius Black','Voldemort'],
    value:''
  
};
select.story = {
    name: 'select',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    