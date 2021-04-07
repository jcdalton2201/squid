
import '../../dist/squid-drawer/squid-drawer.js';
import readme from './readme.md';
export default {
    title: 'drawer'
};

const temp = (args) => {
    return `<squid-drawer >
  <span slot='button'>${args.button}</span>
  <span slot='title'>${args.title}</span>
  <squid-accordion-group>
<!-- one -->
<squid-accordion>
  <span slot="summary">The first accordion in the group</span>
  <div slot="content">
    <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
  </div>
</squid-accordion>

<!-- two -->
<squid-accordion>
  <span slot="summary">The middle child</span>
  <div slot="content">
    <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
  </div>
</squid-accordion>

<!-- three -->
<squid-accordion>
  <span slot="summary">Accordion number three</span>
  <div slot="content">
    <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
  </div>
</squid-accordion>
</squid-accordion-group>
</squid-drawer>`;
};

export const drawer = temp.bind({});
drawer.args ={
    button:'Info',
    title:'Shakespears Quotes',
  
};
drawer.story = {
    name: 'drawer',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    