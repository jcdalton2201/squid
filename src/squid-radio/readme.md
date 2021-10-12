
# SquidRadio

## Details

<squid-radio> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.

Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.

## Inherits

`SquidRadio` inherits from [SquidInputBase](/src/squid-input-base/squid-input-base.js)

## Attributes


|Name|Type|Kind|Description|
|----|----|-----|----------|
|is|string|field|undefined|
|checked|Boolean|field|A Boolean attribute which, if present, indicates that this radio button is the default selected one in the group.|
|disabled|Boolean|field|Whether the form control is disabled|
|required|Boolean|field|Boolean. A value is required or must be check for the form to be submittable|
|readonly|Boolean|field|Boolean. The value is not editable|
|autofocus|Boolean|field|Automatically focus the form control when the page is loaded|
|name|String|field|Name of the form control. Submitted with the form as part of a name/value pair.|
|value|String|field|The value attribute is one which all `<input>`s share; however, it serves a special purpose for inputs of type radio: when a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default. This is demonstrated in the section Value above.|
|form|undefined|field|undefined|
|checkValidity|undefined|field|Proxy input checkValidity|
|validity|undefined|field|proxy input validity|
|validationMessage|undefined|field|proxy input validationMessage|
|willValidate|undefined|field|proxy input willValidate|
|_uid|undefined|field|undefined|

## Public API


|Name|Kind|Description|
|----|-----|----------|
|__onChange|method|Sync all of the inputs with the same name|
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


## Usage

```html
<squid-radio-group>
<h1 slot="title">Vote</h1>
<squid-radio name='test' value='yes' >YES</squid-radio>
<squid-radio name='test' value='no'>No</squid-radio>
<squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group>
```

