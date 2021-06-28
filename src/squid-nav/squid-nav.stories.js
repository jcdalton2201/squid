
import '../../dist/squid-nav/squid-nav.js';
import readme from './readme.md';
export default {
  title: 'nav'
};

const temp = (args) => {
  return `<squid-nav></squid-nav`;
}

export const nav = temp.bind({});
nav.args ={
  inputMax:'',
  max:'',
  
};
nav.story = {
  name: 'nav',
  parameters: {
    notes: {readme},
    argTypes:{}
  },
};
    