import '../../dist/squid-nav-group/squid-nav-group.js';
import '../../dist/squid-sub-nav/squid-sub-nav.js';
import '../../dist/squid-nav/squid-nav.js';
import readme from './readme.md';
export default {
    title: 'nav'
};

const temp = (args) => {
    return `<squid-nav-group theme='${args.theme}'>
    <squid-nav  name='Search Engine'>
    <squid-sub-nav  href='https://google.com'>google</squid-sub-nav>
    <squid-sub-nav  href='https://bing.com'>bing</squid-sub-nav>
    </squid-nav>
    <squid-nav name='News' >
    <squid-sub-nav href='https://CNN.com' >CNN</squid-sub-nav>
    <squid-sub-nav href='https://www.bbc.co.uk/news'>BBC</squid-sub-nav>
</squid-nav>
    </squid-nav-group>`;
};

export const navGroup = temp.bind({});
navGroup.args ={
    theme:'light',
  
};
navGroup.story = {
    name: 'nav-group',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    