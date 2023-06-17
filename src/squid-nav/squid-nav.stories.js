import '../../dist/squid-nav/squid-nav.js';
import '../../dist/squid-sub-nav/squid-sub-nav.js';
//import readme from './readme.md';
export default {
    title: 'nav'
};

const temp = (args) => {
    return `<squid-nav theme='${args.theme}' name='${args.name}'>
    <squid-sub-nav  href='https://google.com'>google</squid-sub-nav>
    <squid-sub-nav  href='https://bing.com'>bing</squid-sub-nav>
    </squid-nav>`;
};

export const nav = temp.bind({});
nav.args ={
    name:'Search Engine',
    theme:'light',
  
};
nav.story = {
    name: 'nav',
    parameters: {
        //notes: {readme},
        argTypes:{}
    },
};
    