# SquidButton

## Details

`SquidButton` is a web component. 

There are several variants of the button, called types. Each has it's own specific meaning and use cases; more detail can be found at the link above. Here's what the system says about the button component.

>Buttons communicate the action that will take place when triggered. They’re hierarchically more important than link text or another pattern that points to supplementary content.

## Inherits

`SquidButton` inherits from [`SquidBase`](../squid-base).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `variant`   | false        | The type attribute defines what class of button is rendered. It is reflected by the `type` property on the element. The possible values are `'action'`, `'progressive'`, `'regressive'`, `'destructive'`, `'ghost'`, `'text'`, `'right` and `'left'`. |
| `type`      | false        | Analagous to the `HTMLButtonElement`'s type attribute. Reflected as a property. |
| `loading`   | true         | The loading attribute will toggle the element's loading state. This is reflected as a property. |
| `disabled`  | true         | Sets the internal button's disabled state. Is reflected by the `disabled` property. |
| `size`      | false        | Changes the button's size. Valid values are `'normal'` and `'small'`. |

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `submitForm`       | Method       | If a form is attached to the button (via the `SquidButton.prototype.form` property), sumbit it. |

## Usage

```html
<squid-button variant="action">Normal action button</squid-button>
<squid-button variant="progressive" size="small">Small progressive button</squid-button>
<squid-button variant="destructive" disabled>Disabled destructive button</squid-button>
```