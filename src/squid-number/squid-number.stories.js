
import '../../dist/squid-number/squid-number.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    let disabled = '';
    let readonly = '';
    let required = '';
    if(args.disabled){
        disabled = 'disabled';
    }
    if(args.readonly){
        readonly = 'readonly';
    }
    if(args.required){
        required = 'required';
    }
    return `<squid-number ${disabled} 
                          ${readonly} 
                          ${required} 
                          min="${args.min}"
                          max="${args.max}"
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
  
};
number.story = {
    name: 'number',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    