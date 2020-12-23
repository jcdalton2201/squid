
import '../../dist/squid-alert/squid-alert.js';
import readme from './readme.md';
export default {
    title: 'alert'
};

const temp = (args) => {
    return `<squid-alert type="${args.type}">
    <p slot="message">${args.message}</p>
        <span slot="button-text">${args.ackMessage}</span>
    </squid-alert>`;
};

export const alert = temp.bind({});
alert.args ={
    type:'global',
    message:'Error message one will see',
    ackMessage:'Acknowledge'
  
};
alert.story = {
    name: 'alert',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
    argTypes:{
        type:{
            control:{
                type:'select',options:['global', 'informational', 'success', 'error', 'warning']
            }
        }
    }
};
    