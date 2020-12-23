import '../../dist/squid-ssn/squid-ssn.js';
import readme from './readme.md';
export default {
    title: 'input',
};

const temp = (args) => {
    return `<squid-ssn '}>${args.label}</squid-ssn`;
};

export const ssn = temp.bind({});
ssn.args = {
    label: 'SSN',
    placeholder: ''
};
ssn.story = {
    name: 'ssn',
    parameters: {
        notes: { readme },
        argTypes: {},
    },
};
