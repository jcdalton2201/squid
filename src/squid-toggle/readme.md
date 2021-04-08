# SquidToggle

## Details

The `SquidToggle` element is an implementation of the [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

> Toggle is a special type of checkbox that presents as a switch.
> The main difference between a toggle and a checkbox is that the toggle switch is for action and checkbox is for status.

## Inherits

`SquidToggle` inherits from [`SquidCheckbox`](../squid-checkbox).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `checked`   | true         | Analogue for the toggle input's `checked` value. Reflected by the `checked` property. |
| `disabled`  | true         | Analogue for the toggle input's `disabled` property. |
| `required`  | true         | Analogue for the toggle input's `required` property. |
| `value`     | false        | The toggle's value. Reflected by the `value` property. |

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `indeterminate`    | Property     | Set the input to an indeterminate state. Will result in a falsy value. |
| `changed`       | Event        | `CustomEvent` emitted when the value changes. The detail property contains the property's `checked` property. |

## Usage

```html
<squid-toggle>Chcekbox</squid-toggle>
<squid-toggle checked="true">Chcekbox checked</squid-toggle>
<squid-toggle disabled>Chcekbox &mdash; disabled</squid-toggle>
<squid-toggle required>Chcekbox &mdash; required</squid-toggle>
```