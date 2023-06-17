
import '../../dist/squid-currency/squid-currency.js';
//import readme from './readme.md';
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
    return `<squid-currency ${disabled} 
                       ${readonly} 
                       ${required} 
                       min="${args.min}"
                       max="${args.max}"
                       autocomplete="${args.autocomplete}"
                       placeholder="${args.placeholder}">${args.label}</squid-currency>`;
};

export const currency = temp.bind({});
currency.args ={
    label:'Label',
    disabled: false,
    readonly:false,
    required:false,
    autocomplete:'',
    min:'',
    max:'',
    placeholder:'',
  
};
currency.story = {
    name: 'currency',
    parameters: {
        //notes: {readme},
        argTypes:{
            label: {control:'text'},
            disabled: {control:'boolean'},
            maxlength: {control:'text'}
          
        }
    },
};
    