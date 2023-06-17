
import '../../dist/squid-hero-number/squid-hero-number.js';
//import readme from './readme.md';
export default {
    title: 'hero-number'
};

const temp = (args) => {
    return `<squid-hero-number number='${args.number}'
                               label='${args.label}'
                               local='${args.local}'
                               currency='${args.currency}'
                               alignment='${args.aligment}'
                               size='${args.size}'></squid-hero-number`;
};

export const heroNumber = temp.bind({});
heroNumber.args ={
    number:'',
    label:'',
    local:(navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language,
    currency:'',
    aligment:'',
    size:''
  
};
heroNumber.story = {
    name: 'hero-number',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    