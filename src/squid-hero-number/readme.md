# SquidHeroNumber

## Details

The `SquidHeroNumber` elemement is a stylized display of a number and label.
> Hero Numbers are used to surface important data points in a stylistic manner. One common usage is displaying account balances or other critical account information.

Further information and usage guidelines can be found at the lsquid above.

## Attributes

| Name             | Boolean      | Description                                       |
|------------------|--------------|---------------------------------------------------|
| `number`         | false        | The number to display. This is reflected as a property. |
| `local`         | false        | locale identifier string such as `'en-US'` or `'de-DE'` |
| `size`           | false        | The size of the hero number and label itself. Reflected as a property. |
| `label`          | false        | An optional label to append to the element. Reflected as a property. |
| `alignment`      | false        | The alignment of the element. Setting the value to `'center'` will center the contents, any other value will left align the elements. Reflected as a property. |
| `currency`      | false        | set the format of the currecy. Exampe `'USD'` |


## Public API

Setting any attribute or reflected property will trigger a re-render.

## Usage

```html
<squid-hero-number number="1234.56"  label="Available credit"></squid-hero-number>
<squid-hero-number number="1234.56"  label="Current balance" alignment="center"></squid-hero-number>
<squid-hero-number number="1234.56"  label="Current balance" size="small" currency="USD"></squid-hero-number>
```