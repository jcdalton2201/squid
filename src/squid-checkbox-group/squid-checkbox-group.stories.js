
import '../../dist/squid-checkbox-group/squid-checkbox-group.js';
//import readme from './readme.md';
export default {
    title: 'checkbox'
};

const temp = (args) => {
    return `
  <form action="javascript:void(0)"><squid-checkbox-group legend="${args.legend}">
  <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
<squid-checkbox value="Rogue One" class='findme'>Rogue One</squid-checkbox>
<squid-checkbox value="Solo">Solo</squid-checkbox>
  </squid-checkbox-group></form>`;
};

export const checkboxGroup = temp.bind({});
checkboxGroup.args ={
    legend:'Favorite StarWars movie',
};
checkboxGroup.story = {
    name: 'checkbox-group',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    