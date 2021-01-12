
import '../../dist/squid-container/squid-container.js';
import readme from './readme.md';
export default {
    title: 'container'
};

const temp = (args) => {
    return `<squid-container 
      radius='${args.radius}' elevation='${args.elevation}' padding='${args.padding}' margin='${args.margin}'>
    <h1>This is a container</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </squid-container`;
};

export const container = temp.bind({});
container.args ={
    radius:'',
    padding:'tiny',
    elevation:'none',
    margin:'tiny'
  
};
container.story = {
    name: 'container',
    parameters: {
        notes: {readme},
        
    },
    argTypes:{
        padding:{
            control:{
                type:'select',options:['null','tiny','small', 'normal','medium','large','xlarge', 'xxlarge']
            }
        },
        margin:{
            control:{
                type:'select',options:['null','tiny','small', 'normal','medium','large','xlarge', 'xxlarge']
            }
        },
        elevation:{
            control:{
                type:'select',options:['none','1','2', '3']
            }
        },
        radius:{
            control:{
                type:'select',options:['2','4']
            }
        }
    }
};
