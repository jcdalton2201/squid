
# SquidTextarea

## Details

The `<textarea>` HTML element represents a multi-line plain-text editing control, 
useful when you want to allow users to enter a sizeable amount of free-form text, 
for example a comment on a review or feedback form.

## Inherits

`SquidTextarea` inherits from [SquidInputBase](/src/squid-input-base/squid-input-base.js)

## Attributes


|Name|Type|Kind|Description|
|----|----|-----|----------|
|checkValidity|undefined|field|Proxy input checkValidity|
|value|String|field|The text inside of the text area.|
|autocomplete|String|field|This attribute indicates whether the value of the control can be automatically completed by the browser. values are `off`, `on`.|
|autofocus|Boolean|field|This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.|
|cols|String|field|-The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20|
|counter|Boolean|field|Displays an instance of the [`SquidCharacterCount`](../squid-character-count) component if set to true and a maxlength is provided. Reflected as a property.|
|disabled|Boolean|field|-This Boolean attribute indicates that the user cannot interact with the control.|
|maxlength|String|field|The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.|
|minlength|String|field|The minimum number of characters (UTF-16 code units) required that the user should enter.|
|placeholder|String|field|A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.|
|readonly|Boolean|field|This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.|
|required|Boolean|field|This attribute specifies that the user must fill in a value before submitting a form.|
|rows|String|field|The number of visible text lines for the control.|
|spellcheck|Boolean|field|Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. The value can be: `true`, `false`, `default`.|
|wrap|String|field|Indicates how the control wraps text. Possible values are: `hard`, `soft`, `off`.|
|id|String|field|An id attribute to allow the `<textarea>` to be associated with a `<label>` element for accessibility purposes|
|name|String|field|The name of the control.|
|form|undefined|field|undefined|
|validity|undefined|field|proxy input validity|
|validationMessage|undefined|field|proxy input validationMessage|
|willValidate|undefined|field|proxy input willValidate|
|_uid|undefined|field|undefined|

## Public API


|Name|Kind|Description|
|----|-----|----------|
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
|squid-input-change|change of the value.|

## Usage

```html
<squid-textarea cols='100'>Tell us your story</squid-textarea>
```

