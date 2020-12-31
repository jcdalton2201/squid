
import '../../dist/squid-calendar/squid-calendar.js';
import readme from './readme.md';
export default {
    title: 'calendar'
};

const temp = (args) => {
    return `<squid-calendar value='${args.value}'></squid-calendar`;
};

export const calendar = temp.bind({});
calendar.args ={
    value:'',
    id:'',
  
};
calendar.story = {
    name: 'calendar',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    