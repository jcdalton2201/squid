
import '../../dist/squid-textarea/squid-textarea.js';
//import readme from './readme.md';
export default {
    title: 'textarea'
};

const temp = (args) => {
    return `<squid-textarea ${args.counter?'counter':''} 
    ${args.disabled?'disabled':''} 
    ${args.readonly?'readonly':''} 
    ${args.required?'required':''}
    ${args.spellcheck?'spellcheck':''}
    rows="${args.rows}"
    cols="${args.cols}"
    minlength="${args.minlength}"
    maxlength="${args.maxlength}"></squid-textarea`;
};

export const textarea = temp.bind({});
textarea.args ={
    maxlength:'',
    minlength:'',
    max:'',
    rows:10,
    cols:40,
    counter:false,
    disabled:false,
    readonly:false,
    required:false,
    spellcheck:false,
  
};
textarea.story = {
    name: 'textarea',
    parameters: {
        //notes: {readme},
        argTypes:{
            maxlength: {control:'text'},
            minlength: {control:'text'}
        }
    },
};
    