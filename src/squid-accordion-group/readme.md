# SquidAccordionGroup

## Details

The `SquidAccordionGroup` element exists to group instances of `SquidAccordion`. Importing the accordion group also implicitly imports the accordions. The primary function is to group accordions so that only one accordion is open at a time.

## Inherits

`SquidAccordionGroup` inherits from [`BaseElement`](../base-element).

## Usage

```html
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
```