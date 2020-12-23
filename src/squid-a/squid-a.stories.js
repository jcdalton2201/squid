
import { document } from 'global';
import  '../../dist/squid-a/squid-a.js';
import readme from './readme.md';
export default {
    title: 'links'
};

const temp = ( args ) => {
    const a = document.createElement('squid-a');
    a.innerHTML = args.title;
    a.size = args.size;
    a.variant = args.variant;
    return a;
};
export const a = temp.bind({});
a.args ={
    title:'link',
    size:'',
    variant:'action'
   
};
a.story = {
    name: 'a',
    parameters: {
        notes: {readme},
    },
    argTypes:{
        title: {control:'text'},
        size: {control:'text'},
        variant: {control:{
            type:'select',options:['action','progressive','destructive', 'regressive','text','right','left']
        }}
    }
};
    