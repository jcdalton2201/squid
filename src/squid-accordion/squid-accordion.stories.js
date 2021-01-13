
import '../../dist/squid-accordion/squid-accordion.js';
import readme from './readme.md';
export default {
    title: 'accordion'
};

const temp = (args) => {
    return `<squid-accordion>
  <span slot="summary">${args.label}</span>
  <div slot="content">
    <p>Hello</p>
  </div>
  </squid-accordion`;
};

export const accordion = temp.bind({});
accordion.args ={
    label:'This is a lable',
  
};
accordion.story = {
    name: 'accordion',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    