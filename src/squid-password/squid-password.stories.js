
import '../../dist/squid-password/squid-password.js';
//import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    return `<squid-password>${args.label}</squid-password`;
};

export const password = temp.bind({});
password.args ={
    label:'Password',
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
password.story = {
    name: 'password',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    