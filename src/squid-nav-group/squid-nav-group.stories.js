
import '../../dist/squid-nav-group/squid-nav-group.js';
import readme from './readme.md';
export default {
  title: 'nav-group'
};

const temp = (args) => {
  return `<squid-nav-group></squid-nav-group`;
}

export const nav-group = temp.bind({});
nav-group.args ={
  inputMax:'',
  max:'',
  
};
nav-group.story = {
  name: 'nav-group',
  parameters: {
    notes: {readme},
    argTypes:{}
  },
};
    