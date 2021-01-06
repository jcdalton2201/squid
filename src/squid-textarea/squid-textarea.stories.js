
import '../../dist/squid-textarea/squid-textarea.js';
import readme from './readme.md';
export default {
  title: 'textarea'
};

const temp = (args) => {
  return `<squid-textarea></squid-textarea`;
}

export const textarea = temp.bind({});
textarea.args ={
  inputMax:'',
  max:'',
  
};
textarea.story = {
  name: 'textarea',
  parameters: {
    notes: {readme},
    argTypes:{}
  },
};
    