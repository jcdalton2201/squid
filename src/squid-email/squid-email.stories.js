
import '../../dist/squid-email/squid-email.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {  

    return `<squid-email ${args.counter?'counter':''} 
                        ${args.disabled?'disabled':''} 
                        ${args.readonly?'readonly':''} 
                        ${args.required?'required':''} 
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
    counter:false
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
    