# SquidCheckbox

## Details

The `SquidCheckbox` element is an implementation of the [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

> Checkboxes are used to select a single item or multiple items. A checkbox has two selection states: unselected and selected.
> The difference between radio buttons and checkboxes is that a radio button is for a single selection from a set of options and a checkbox allows for multiple selections from a set of options.
> The main difference between a toggle and a checkbox is that the [toggle switch](../squid-toggle) is for action and checkbox is for status.

## Inherits

`SquidCheckbox` inherits from [`SquidBaseInput`](../squid-base-input).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `checked`   | true         | Analogue for the checkbox input's `checked` value. Reflected by the `checked` property. |
| `disabled`  | true         | Analogue for the checkbox input's `disabled` property. |
| `required`  | true         | Analogue for the checkbox input's `required` property. |
| `value`     | false        | The checkbox's value. Reflected by the `value` property. |

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `indeterminate`    | Property     | Set the input to an indeterminate state. Will result in a falsy value. |
| `changed`       | Event        | `CustomEvent` emitted when the value changes. The detail property contains the property's `checked` property. |

## Usage

```html
<squid-checkbox>Chcekbox</squid-checkbox>
<squid-checkbox checked="true">Chcekbox checked</squid-checkbox>
<squid-checkbox disabled>Chcekbox &mdash; disabled</squid-checkbox>
<squid-checkbox required>Chcekbox &mdash; required</squid-checkbox>