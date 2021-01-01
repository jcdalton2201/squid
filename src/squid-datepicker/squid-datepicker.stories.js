
import '../../dist/squid-datepicker/squid-datepicker.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    let disabled = '';
    let required = '';
    if(args.disabled){
        disabled = 'disabled';
    }
    if(args.required){
        required = 'required';
    }
    return `<squid-datepicker ${disabled} 
                              ${required} 
                              autocomplete="${args.autocomplete}"
                              placeholder="${args.placeholder}">
              ${args.label}
            </squid-datepicker`;
};

export const datepicker = temp.bind({});
datepicker.args ={
    label:'Label',
    disabled: false,
    required:false,
    autocomplete:'',
    placeholder:'',
  
};
datepicker.story = {
    name: 'datepicker',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    