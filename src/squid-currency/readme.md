# SquidCurrency

## Details

`SquidCurrency` is an implementation of [`SquidInput`](../squid-input) with a custom mask.
* Default amount is empty, not 0
* Dollar sign is instantly prepended to the typed input amount upon input
* Dollar sign is always displayed on the left side of the number
* For amounts of less than $1, display $0.XX
* Field does not pass value of dollar sign on submit
* No custom number pads
* Amount input must allow for input of <1.00 amounts

## Inherits

`SquidCurrency` inherits from [`SquidInput`](../squid-input).

## Attributes

| Name             | Boolean      | Description                                       |
|------------------|--------------|---------------------------------------------------|
| `dollar-only`    | true        | Default value is set to false, which allows decimal value of currency. When set to true, this field does not allow decimal part of currency.   |

## Usage

```html
<squid-currency></squid-currency>
```