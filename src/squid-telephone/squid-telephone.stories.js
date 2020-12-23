
import  '../../dist/squid-telephone/squid-telephone.js';
import readme from './readme.md';
export default {
    title: 'input'
};

const temp = (args) => {
    return `<squid-telephone>
    ${args.label}
    </squid-telephone>`;
};

export const telephone = temp.bind({});
telephone.args ={
    label:'Telephone'
};
telephone.story = {
    name: 'telephone',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    