
import '../../dist/squid-errors/squid-errors.js';
import readme from './readme.md';
export default {
    title: 'errors'
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
    return `<squid-input  ${disabled} 
                          ${readonly} 
                          ${required} 
                          minlength="${args.minlength}"
                          min="${args.min}"
                          max="${args.max}"
                          pattern="${args.pattern}"
                          autocomplete="${args.autocomplete}"
                          placeholder="${args.placeholder}"
                          maxlength="${args.maxlength}">${args.label}</squid-input>`;
};

export const errors = temp.bind({});
errors.args ={
    label:'Label',
    disabled: false,
    readonly:false,
    required:false,
    maxlength:'',
    minlength:'',
    pattern:'',
    autocomplete:'',
    min:'',
    max:'',
    placeholder:'',
  
};
errors.story = {
    name: 'errors',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    