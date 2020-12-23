
import '../../dist/squid-input/squid-input.js';
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
    return `<squid-input ${disabled} 
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

export const input = temp.bind({});
input.args ={
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
input.story = {
    name: 'input',
    parameters: {
        notes: {readme},
        argTypes:{
            label: {control:'text'},
            disabled: {control:'boolean'},
            maxlength: {control:'text'}
            
        }
    },
};
    