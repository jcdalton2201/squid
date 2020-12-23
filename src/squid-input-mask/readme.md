# SquidInputMask

## Detail

The `SquidInputMask` is functionally an `SquidInput` component with an input mask attached to enforece a particular pattern. This now serves as the base class for [SquidTelephone](../squid-telephone).

## Inherits

`SquidInputMask` inherits from [`SquidInput`](../squid-input).

## Attributes

Attributes include everything on the parent class, plus the following:

| Name            | Boolean           | Description                    |
|-----------------|-------------------|--------------------------------|
| `mask`          | false             | The mask to apply to the input. Includes two options: alpha: `'A'` and numeric `'1'`. So a mask for a telephone might be `(111) 111-1111`. For alphanumeric characters, use the `'e'` character. Reflected as a property. **NOTE:** Updating the mask property after the element has been connected to the DOM will not create a new mask. |

## Public API

See [SquidInput](../squid-input).

## Usage

The `firstUpdated` lifecycle takes a mask argument if extending from `SquidInputMask`.

```html
<squid-input-mask mask="(111) 111-1111">Telephone Number</squid-input-mask>
<squid-input-mask mask="1AAAA11AAAA111111" helper="Format: 1AAAA11AAAA111111">Vehicle Identification Number</squid-input-mask>
```

or

```javascript
import { SquidInputMask } from '@c1/squid/dist/squid-input-mask/squid-input-mask.js';

class VINInput extends SquidInputMask {
  connected() {
    super.connected('1AAAA11AAAA111111');
  }
}

customElements.define('vin-input', VINInput);
```