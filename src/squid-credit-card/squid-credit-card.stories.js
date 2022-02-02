
import '../../dist/squid-credit-card/squid-credit-card.js';
import readme from './readme.md';
export default {
    title: 'input',
};

const temp = (args) => {
    return `
  <form name="userForm" autocomplete>
   <squid-credit-card name="cc-number" autocomplete="cc-number">${args.label}</squid-credit-card>
  </form>
  `;
};

export const creditCard = temp.bind({});
creditCard.args ={
    label: 'Credit Card',
  
};
creditCard.story = {
    name: 'credit-card',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    