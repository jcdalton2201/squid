
import '../../dist/squid-dialog/squid-dialog.js';
import readme from './readme.md';
export default {
    title: 'dialog',
    argTypes: { onClick: { action: 'clicked' } }
};

const temp = (args) => {
    return `<squid-dialog ${args.open?'open':''} >
    <h1>${args.label}</h1>
    </squid-dialog`;
};

export const dialog = temp.bind({});
dialog.args ={
    label:'We Have a Title',
    open:false,
  
};
dialog.story = {
    name: 'dialog',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    