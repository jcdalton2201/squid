# SquidStepper

## Details

The `SquidStepper` element to allow users to quickly specify a value within a given range.

## Inherits

`SquidDrawer` inherits from [`BaseElement`](../utils/baseElement).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `label   `  | false        | label for the compoment. |
| `value`     | false        | The toggle's value. Reflected by the `value` property. |

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `increase`         | Method       | Move up the option change |
| `decrease`         | Method       | Move down the option change |

## Usage

```html
<squid-stepper name='stepper' label='Traveller Class' value='2'>
    <option value='1'>First</option>
    <option value='2'>Buisness</option>
    <option value='3'>Coach</option>
</squid-stepper>
```