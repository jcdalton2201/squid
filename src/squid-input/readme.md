# SquidInput

## Detail

The `SquidInput` component is an implementation the HTML [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element.

> Text inputs allow text or numeric values to be entered and edited in one line.
> Text areas allow multiple lines of text to be entered.

Squid breaks up the input elements each into their own component for convenience including [`SquidCheckbox`](../squid-checkbox), [`SquidCombobox`](../squid-checkbox), [`SquidEmail`](../squid-email), `SquidInput`, [`SquidNumber`](../squid-number), [`SquidPassword`](../squid-password), [`SquidRadio`](../squid-radio), [`SquidSearch`](../squid-search), [`SquidSelect`](SquidSelect), [`SquidSsn`](../squid-ssn), [`SquidTelephone`](../squid-telephone) and [`SquidTextarea`](../squid-textarea).

## Inherits

`SquidButton` inherits from [`LitElement`](https://lit-element.polymer-project.org/).

## Attributes

| Name             | Boolean      | Description                                       |
|------------------|--------------|---------------------------------------------------|
| `disabled`       | true         | A proxy for the input disabled attribute. Reflected as a property. |
| `required`       | true         | A proxy for the input required attribute. Reflected as a property. |
| `autofocus`      | true         | A proxy for the input autofocus attribute. Reflected as a property. |
| `compact`        | true         | Uses a compact input. This specific style is not defined by the ONE Design System, but used widely across Financial Services. |
| `tooltip`        | false        | Sets a tooltip on the combobox label using [`SquidTooltip`](../squid-tooltip). Reflected as a property. |
| `placeholder`    | false        | A proxy for the input placeholder attribute. Reflected as a property. |
| `value`          | false        | Sets the input's value and emits an `squid-change` event when updated. Reflected as a property. |
| `minlength`      | false        | The input's `minlength` attribute (`minLength` property). Reflected here solely as `minlength`. |
| `maxlength`      | false        | The input's `maxlength` attribute (`maxLength` property). Reflected here solely as `maxlength`. |
| `readonly`       | true         | A proxy for the input's `readonly` attribute (`readOnly`) property. Reflected here as `readonly`. |
| `autocomplete`   | false        | A proxy for the input's `autocomplete` property. Reflected as a property. |
| `pattern`        | false        | A RegEx to be used by the input for validation purposes. Serves as a proxy for the input's pattern property/attribute. |
| `min`            | false        | A proxy for the input's `min` attribute. Reflected as a property. |
| `max`            | false        | A proxy for the input's `max` attribute. Reflected as a property. |
| `counter`        | true         | Displays an instance of the [`SquidCharacterCount`](../squid-character-count) component if set to true and a maxlength is provided. Reflected as a property. |

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
<squid-input required minlength="3" maxlength="5" tooltip="Tooltip text">This input will run validations</squid-input>
```
