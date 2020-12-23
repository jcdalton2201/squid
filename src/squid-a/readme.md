# SquidA

## Details

`SquidA` is a web component. The `SquidA` component can take on either a text style or any of the [`SquidButton`](../squid-button) types.

## Inherits

`SquidA` inherits from [`SquidButton`](../squid-button).

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `href`      | false        | The anchor's href. If not set, the value will default to a `javascript:void(0)` value. Reflected as a property. |
| `variant`      | false        | The variant attribute defines what class of button is rendered. It is reflected by the `type` property on the element. The possible values are `'link'`, `'action'`, `'progressive'`, `'regressive'`, `'destructive'`, `'ghost'`, `'text'`, `'left'` and `'right'`. If one of the button values is used, the anchor will be given a role of `'button'`. This was previously the `type` attribute until version 5. |
| `target`    | false        | Sets the anchor's target. If set to `_blank` the anchor will also include a `rel="noopener"` unless the element's override attribute is set to 'allow'. |
| `referrer`  | false        | If set to 'allow' will not set the the anchor's `rel` attribute to `'noopener'`. This is strongly discouraged for security reasons. |
| `size`      | false        | Changes the button's size. Valid values are `'normal'` and `'small'`. |
| `expanded`  | true         | For use with [`SquidCard`](../squid-card), if set to `true` on an element in the contents slot, the link's footprint will expand to fill the entire content area. This will also be the case when the element is the child of any other relatively-positioned ancestor, so take care to only use it in appropriate contexts. |

## Usage

```html
<p><squid-a href="https://github.com/" target="_blank">GitHub in a new tab</squid-a></p>
<p><squid-a href="https://google">google</squid-a></p>
```
