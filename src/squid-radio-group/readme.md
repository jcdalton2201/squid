
# SquidRadioGroup

## Details

a collection of radio buttons describing a set of related options. Only one radio button in a group can be selected at the same time.

## Inherits

`SquidRadioGroup` inherits from [BaseElement](/src/utils/baseElement.js)

## Attributes


|Name|Type|Kind|Description|
|----|----|-----|----------|
|value|String|field|The value attribute is one which all <input>s share; however, it serves a special purpose for inputs of type radio: when a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default. This is demonstrated in the section Value above.|

## Public API


|Name|Kind|Description|
|----|-----|----------|
|__onChange|method|update all of the radio buttons.|
|__onFieldsetKeyup|method|Trap up and down keys to step through the group|

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

