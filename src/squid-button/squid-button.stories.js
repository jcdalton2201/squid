
import '../../dist/squid-button/squid-button.js';
//import readme from './readme.md';
export default {
    title: 'links'
};

const temp = (args) => {
    return `<squid-button size="${args.size}" 
                          variant="${args.variant}" 
                          ${args.loading?'loading':''}
                          ${args.disabled?'disabled':''}>${args.title}</squid-button>`;
};

export const button = temp.bind({});
button.args ={
    variant:'action',
    title:'Test Button',
  
};
button.story = {
    name: 'button',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
    argTypes:{
        loading:{control:'boolean'},
        disabled:{control:'boolean'},
        title: {control:'text'},
        size: {control:'text'},
        variant: {control:{
            type:'select',options:['action','progressive','destructive', 'regressive','text','right','left']
        }}
    }
};
    