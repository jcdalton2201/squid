# SquidAccordion

## Details

> Accordions provide progressive disclosure, showing focused content and allow users to expose additional content if they choose. Accordions contain a title, an expanded and a collapsed state, spacing, and icons indicating open and close.

## Inherits

`SquidAccordion` inherits from [`BaseElement`](../base-element).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `open`      | true         | The `open` attribute determines whether or not the accordion is in an open state. If the attribute is present, the accordion will open and the element's `open` property will be set to `true`. |
| `theme`     | false        | Sets the accordion's theme. Options are `'dark'` and `'light`'. Reflected as a property. |

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `open`             | Property     | The `open` property reflects the accordion's open state. It is reflected by the `open` attribute. |
| `toggle()`         | Method       | The `SquidAccordion.toggle` method will toggle the accordion's open state and be reflected by the element's `open` property and attribute. |
| `accordion-toggle` | Event        | The `accordion-toggle` custom event will be emitted when a change to the accordion's state occurrs. The `Event.detail` property will reflect the current element state. |

## Usage

```html
<squid-accordion>
  <span slot="summary">This will the the accordion's title</span>
  <div slot="content">
    <p>The accordion's content should be placed in the content slot.</p>
    <p>Anything inside this slot will be hidden unless the accordion is open.</p>
  </div>
</squid-accordion>
```