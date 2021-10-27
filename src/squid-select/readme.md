
# SquidSelect

## Details

The <select> HTML element represents a control that provides a menu of options:

## Inherits

`SquidSelect` inherits from [SquidInput](/src/squid-input/squid-input.js)

## Attributes


|Name|Type|Kind|Description|
|----|----|-----|----------|
|checkValidity|undefined|field|Proxy input checkValidity|
|value|String|field| Sets the input's value and emits an `squid-change` event when updated. Reflected as a property.|
|icon|Boolean|field|A boolean value to show the chevron on the input element|
|_showDisabled|string|field|undefined|
|_inputType|undefined|field|undefined|
|disabled|String|field| A proxy for the input disabled attribute. Reflected as a property.|
|required|String|field| A proxy for the input required attribute. Reflected as a property.|
|autofocus|String|field| A proxy for the input autofocus attribute. Reflected as a property.|
|compact|String|field| Uses a compact input. This specific style is not defined by the ONE Design System, but used widely across Financial Services.|
|tooltip|String|field| Sets a tooltip on the combobox label using [`SquidTooltip`](../squid-tooltip). Reflected as a property.|
|placeholder|String|field| A proxy for the input placeholder attribute. Reflected as a property.|
|minlength|String|field| The input's `minlength` attribute (`minLength` property). Reflected here solely as `minlength`.|
|maxlength|String|field| The input's `maxlength` attribute (`maxLength` property). Reflected here solely as `maxlength`.|
|readonly|String|field| A proxy for the input's `readonly` attribute (`readOnly`) property. Reflected here as `readonly`.|
|autocomplete|String|field| A proxy for the input's `autocomplete` property. Reflected as a property.|
|pattern|String|field| A RegEx to be used by the input for validation purposes. Serves as a proxy for the input's pattern property/attribute.|
|min|String|field| A proxy for the input's `min` attribute. Reflected as a property.|
|max|String|field| A proxy for the input's `max` attribute. Reflected as a property.|
|counter|String|field| Displays an instance of the [`SquidCharacterCount`](../squid-character-count) component if set to true and a maxlength is provided. Reflected as a property.|
|size|undefined|field|undefined|
|errorMessage|undefined|field|undefined|
|step|undefined|field|undefined|
|form|undefined|field|undefined|
|validity|undefined|field|proxy input validity|
|validationMessage|undefined|field|proxy input validationMessage|
|willValidate|undefined|field|proxy input willValidate|
|_uid|undefined|field|undefined|

## Public API


|Name|Kind|Description|
|----|-----|----------|
|__onChange|method|undefined|
|__slotUpdate|method|undefined|
|__setValue|method|undefined|
|updatePattern|method|undefined|
|__onInput|method|undefined|
|blur|method|proxy blur function|
|click|method|proxy click function|
|focus|method|proxy focus function|
|setErrorMessage|method|Change the default error message|
|setCustomValidity|method|undefined|
|setHelper|method|Set the element's helper text|
|__onFormReset|method|undefined|
|__getInput|method|undefined|
|__getHelper|method|undefined|

## Events


|Name|Description|
|----|----------|
|squid-select-change|A change to the input's value.|
|squid-input-change|Event dispatched for an input change.|

## Usage

```html
<squid-select name="pets" id="pet-select">
<span slot='label'>Animals</span>
<option value="">--Please choose an option--</option>
<option value="dog">Dog</option>
<option value="cat">Cat</option>
<option value="hamster">Hamster</option>
<option value="parrot">Parrot</option>
<option value="spider">Spider</option>
<option value="goldfish">Goldfish</option>
</squid-select>
```

