
import '../../dist/squid-email/squid-email.js';
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
    return `<squid-email ${disabled} 
                       ${readonly} 
                       ${required} 
                       minlength="${args.minlength}"
                       min="${args.min}"
                       max="${args.max}"
                       pattern="${args.pattern}"
                       autocomplete="${args.autocomplete}"
                       placeholder="${args.placeholder}"
                       maxlength="${args.maxlength}">${args.label}</squid-email>`;
};

export const email = temp.bind({});
email.args ={
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
email.story = {
    name: 'email',
    parameters: {
        notes: {readme},
        argTypes:{
            label: {control:'text'},
            disabled: {control:'boolean'},
            maxlength: {control:'text'}
          
        }
    },
};
    