
import '../../dist/squid-input/squid-input.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {  

    return `<squid-input ${args.counter?'counter':''} 
                         ${args.disabled?'disabled':''} 
                         ${args.readonly?'readonly':''} 
                         ${args.required?'required':''} 
                         minlength="${args.minlength}"
                         min="${args.min}"
                         max="${args.max}"
                         pattern="${args.pattern}"
                         autocomplete="${args.autocomplete}"
                         name="${args.name}"
                         placeholder="${args.placeholder}"
                         maxlength="${args.maxlength}">${args.label}</squid-input>`;
};

export const input = temp.bind({});
input.args ={
    label:'Label',
    name:'first',
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
    counter:false
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
    