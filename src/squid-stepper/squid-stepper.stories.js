import '../../dist/squid-stepper/squid-stepper.js';
//import readme from './readme.md';
export default {
    title: 'stepper',
};

const temp = (args) => {
    return `<squid-stepper value='${args.value}' label='${args.label}'>
    <option value='1'>First</option>
                <option value='2'>Buisness</option>
                <option value='3'>Coach</option>
    </squid-stepper`;
};

export const stepper = temp.bind({});
stepper.args = {
    value: '',
    label: 'Traveller Class',
};
stepper.story = {
    name: 'stepper',
    parameters: {
        // notes: { readme },
        argTypes: {},
    },
};
