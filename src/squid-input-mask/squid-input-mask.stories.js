
import '../../dist/squid-input-mask/squid-input-mask.js';
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
    return `<squid-input-mask  mask="${args.mask}"
    ${disabled} 
    ${readonly} 
    ${required} 
    minlength="${args.minlength}"
    min="${args.min}"
    max="${args.max}"
    autocomplete="${args.autocomplete}"
    placeholder="${args.placeholder}"
    maxlength="${args.maxlength}">${args.label}</squid-input-mask`;
};

export const inputMask = temp.bind({});
inputMask.args ={
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
    mask:'',
};
inputMask.story = {
    name: 'input-mask',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    