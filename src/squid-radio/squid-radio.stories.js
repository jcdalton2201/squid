
import '../../dist/squid-radio/squid-radio.js';
import readme from './readme.md';
export default {
    title: 'radio'
};

const temp = (args) => {
    return `
<squid-radio-group>
  <h1 slot="title">${args.title}</h1>
  <squid-radio name='test' value='yes' >YES</squid-radio>
  <squid-radio name='test' value='no'>No</squid-radio>
  <squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group>
  `;
};

export const radio = temp.bind({});
radio.args ={
    title:'Title'
  
};
radio.story = {
    name: 'radio',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    