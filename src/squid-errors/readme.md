
# SquidErrors

## Details

To be used with the SquidInput it will display the error message for validation in a constant manor.

## Inherits

`SquidErrors` inherits from [BaseElement](/src/utils/baseElement.js)

## Attributes


|Name|Type|Kind|Description|
|----|----|-----|----------|
|id|String|field|the id for the element to be used with labels.|
|form|undefined|field|undefined|
|validityMessages|undefined|field|Default validity messages intentionally newed up for each instance|
|_inputs|array|field|Set up inputs array|
|validators|undefined|field|Set up initial validators|
|_message|String|field|the message to be shown inside the error box.|

## Public API


|Name|Kind|Description|
|----|-----|----------|
|setSelector|method|undefined|
|setDescribes|method|undefined|
|_addEventListeners|method|undefined|
|appendHelper|method|undefined|
|_onDescribesInput|method|Input input event watcher used to remove errors
when this.describes is altered|
|preventDefault|method|check to see if we need to prevent an event.|
|checkValidity|method|undefined|
|setHelper|method|undefined|
|handleChange|method|When the input changes display the messae|
|_inputInvalid|method|undefined|
|_inputValid|method|undefined|
|_initInput|method|undefined|
|_generateMessage|method|Set the message|
|bindMethod|method|bind this to the method|
|bindMethods|method|binds the array of methods with this.|
|setCustomError|method|Set the error message with this one.|

## Events


## Usage

```html
undefined
```

