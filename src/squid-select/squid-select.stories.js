
import '../../dist/squid-select/squid-select.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    const element = document.createElement('squid-select');
    const options = [];
    for (let i = 0; i < args.data.length; i++) {
        options.push(`<option value="${args.data[i]}">${args.data[i]}</option>`);
        
    }
    if(args.icon){
        element.setAttribute('icon',args.icon);
    } else {
        element.removeAttribute('icon');
    }
    element.innerHTML = `<span slot='label'>${args.label}</span>${options.join('')}`;
    return element;
};

export const select = temp.bind({});
select.args ={
    label:'JK',
    data:['Harry Potter','Ron Weasley','Hermione Granger','Albus Dumbledore','Severus Snape','Sirius Black','Voldemort'],
    value:'',
    icon:true
  
};
select.story = {
    name: 'select',
    parameters: {
        notes: {readme},
        argTypes:{
            icon: {control:'boolean'},
        }
    },
};
    