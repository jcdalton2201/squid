import '../../dist/squid-sub-nav/squid-sub-nav.js';
//import readme from './readme.md';
export default {
    title: 'nav'
};

const temp = (args) => {
    return `<squid-sub-nav theme='${args.theme}' href='${args.href}'>${args.name}</squid-sub-nav>`;
};

export const subNav = temp.bind({});
subNav.args ={
    href:'https://google.com',
    name:'google',
    theme:'light',
  
};
subNav.story = {
    name: 'sub-nav',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    