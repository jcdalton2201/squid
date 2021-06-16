# SquidCharacterCount

## Details

The `SquidCharacterCount` is used to allow a user to track how many characters are still available in a given input.

## Inherits

`SquidCharacterCounter` inherits from [`LitElement`](https://lit.polymer-project.org/).

## Attributes

| Name       | Boolean    | Description              |
|------------|------------|--------------------------|
| `id`       | false      | The element's id, corresponds to the `aria-describedby` attribute on an `HTMLInputElement` in the same `DocumentOrShadowRoot`. The element will hook into this element and attach an event listener to look for changes. Reflected as a property. |
| `max`      | false      | The denomenator in the current/total fraction. Reflected as a property. |
| `count`  | false      | The current character count. Reflected as a property. |

## Usage

In order to tie descriptions to an input, the `aria-describedby` attribute must be placed on the input (at least until new features such as the [Accessibility Object Model](https://github.com/WICG/aom) are implemented). As such, this element must be placed in the same document or document fragment as the `SquidCharacterCount` element.

```html
<squid-character-count id="counter" max="10"></squid-character-count>
<input aria-describedby="counter">
```