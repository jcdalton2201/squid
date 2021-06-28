
import '../../dist/squid-sub-nav/squid-sub-nav.js';
import readme from './readme.md';
export default {
  title: 'sub-nav'
};

const temp = (args) => {
  return `<squid-sub-nav></squid-sub-nav`;
}

export const sub-nav = temp.bind({});
sub-nav.args ={
  inputMax:'',
  max:'',
  
};
sub-nav.story = {
  name: 'sub-nav',
  parameters: {
    notes: {readme},
    argTypes:{}
  },
};
    