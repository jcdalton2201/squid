# SquidDrawer

## Details

The `SquidDrawer` A navigation drawer provides access to destinations and app functionality, such as switching accounts. It can either be permanently on-screen or controlled by a navigation menu icon.

> Drawer has two slots that should be filled.
> slot='button' is the name that goes in the button field
> slot='title' is the title that will display in the drawer
> The rest of the html will be placed in the drawer.

## Inherits

`SquidDrawer` inherits from [`BaseElement`](../utils/baseElement).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
|position     | false        |Determines what side the drawer will be on. the values are `right` and `left`|

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
|openDrawer          |Method        |Opens the drawer                                   |
|closeDrawer         |Method        |Close the drawer                                   |

## Usage

```html
  <squid-drawer >
    <span slot='button'>Info</span>
    <span slot='title'>Shakespears Quotes</span>
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
  </squid-drawer>
  ```
