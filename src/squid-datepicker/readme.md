# SquidDatepicker

## Detail

The `SquidDatepicker` component is an version of input with a type of text.  It will use the [SquidCalendar](../squid-Calendar) to display a calendar for picking a date.

## Inherits

`SquidDatepicker` inherits from [`SquidInput`](../squid-input).

## Attributes

| Name             | Boolean      | Description                                       |
|------------------|--------------|---------------------------------------------------|
| `disabled`       | true         | A proxy for the input disabled attribute. Reflected as a property. |
| `required`       | true         | A proxy for the input required attribute. Reflected as a property. |
| `autofocus`      | true         | A proxy for the input autofocus attribute. Reflected as a property. |
| `placeholder`    | false        | A proxy for the input placeholder attribute. Reflected as a property. |
| `value`          | false        | Sets the input's value and emits an `squid-change` event when updated. Reflected as a property. |
| `autocomplete`   | false        | A proxy for the input's `autocomplete` property. Reflected as a property. |
| `pattern`        | false        | A RegEx to be used by the input for validation purposes. Serves as a proxy for the input's pattern property/attribute. |

## Public API

| Name               | Type            | Description                                       |
|--------------------|-----------------|---------------------------------------------------|
| `checkValidity`    | Method          | Getter for `HTMLInputElement`'s `checkValidity` method. Returns the `true` if the element is valid, `false` otherwise. |
| `validity`         | Property        | Getter that returns the `HTMLInputElement`'s validity object expressed as a [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) object. |
| `willValidate`     | Property        | Getter for the `HTMLInputElement`'s willValidate method. Returns a boolean  indicating whether the lement is a candidate for constraint validation. |
| `blur`             | Method          | Proxy for `HTMLInputElement.prototype.blur`. |
| `click`             | Method         | Proxy for `HTMLInputElement.prototype.click`. |
| `focus`             | Method         | Proxy for `HTMLInputElement.prototype.focus`. |
| `squid-change`        | Event / Output | A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time the input's value is changed. Not to be confused with the browser `change` event which only fires when an input is blurred. The `detail` property contains the input's value. |

## Usage

```html
<squid-datepicker required >This input will run validations</squid-datepicker>
```
