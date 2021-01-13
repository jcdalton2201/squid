
import '../../dist/squid-accordion-group/squid-accordion-group.js';
import readme from './readme.md';
export default {
    title: 'accordion-group'
};

const temp = () => {
    return `
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
    `;
};

export const accordionGroup = temp.bind({});
accordionGroup.args ={  
};
accordionGroup.story = {
    name: 'accordion-group',
    parameters: {
        notes: {readme},
        argTypes:{}
    },
};
    