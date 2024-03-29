
import '../../dist/squid-number/squid-number.js';
//import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    return `<squid-number ${args.counter?'counter':''} 
                          ${args.disabled?'disabled':''} 
                          ${args.readonly?'readonly':''} 
                          ${args.required?'required':''}
                          min="${args.min}"
                          max="${args.max}"
                          name="${args.name}"
                          autocomplete="${args.autocomplete}"
                          placeholder="${args.placeholder}">${args.label}</squid-number`;
};

export const number = temp.bind({});
number.args ={
    label:'Number',
    disabled: false,
    readonly:false,
    required:false,
    autocomplete:'',
    min:'',
    max:'',
    placeholder:'',
    counter:'',
    name:'first'
  
};
number.story = {
    name: 'number',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    