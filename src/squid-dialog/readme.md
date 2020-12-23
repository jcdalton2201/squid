# SquidDialog

## Details

The `SquidDialog` component is an for a overlay modal.

> Dialogs present critical information, require users to make decisions, and can afford specific tasks without leaving the current screen.

## Inherits

`SquidAccordionGroup` inherits from [`SquidElement`](../utils/squidElement.js).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `open`      | true         | If set, the dialog element will be displayed on the page. This is reflected as a property. |
| `overlay`   | false        | The theme of the dialog's overlay. Valid values are `'light'` and `'dark'` with `'light'` being the default. If no overlay value is set, the dialog will fallback to the light theme. This is reflected as a property. |
| `type`      | false        | Reflects the dialog's type. If set to `'decision'`, the dialog will behave as a decision dialog as documented in the global ONE Desigrn System documentation lsquided above. Reflected as a property. |

## Public API

| Name               | Type          | Description                                       |
|--------------------|---------------|---------------------------------------------------|
| `close`            | Method        | If the dialog is open, close the dialog and emit a `'close'` event. Sets the open property and attribute to `false`. |
| `showModal`        | Method        | If the dialog is closed, display the dialog and set the open property and attribute to `true`. |
| `close`            | Event         | A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time the element is closed. The detail property on the event will be the dialog's `returnValue` property. It is up to the user to decide how to set that value. |
| Escape keypress    | EventListener | If the dialog is open and the user presses the escape key, the dialog will close. |

## Usage

All included children will be added to the primary slot. Any child of `squid-dialog-buttons` will be added to the buttons slot which will render the buttons appropriately.

```html
<squid-dialog>
  <h1>ODS Modal</h1>
  <div>
    <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
  </div>
    <squid-button type="progressive" slot='buttons'>Close</squid-button>
</squid-dialog>
```