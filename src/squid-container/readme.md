# SquidContainer

## Details

This is a contain around a section of html.  

## Inherits

`SquidContainer` inherits from [`BaseElement`](../base-element).

## Attributes

| Name         | Boolean      | Description                                       |
|--------------|--------------|---------------------------------------------------|
| `bgColor`    | false        | Adds background color to the container            |
| `radius`     | false        | The container's border-radius. Valid values are `null`, `'0'`, `'2'` and `'4'`. Reflected as a property. Each background color will switch the default text color for accessibility reasons, though this can be overridden by normal CSS. |
| `padding`    | false        | The padding size in the container. Sizes reflect ODS sizing options: `null`, `'tiny'`, `'small'`, `'normal'`, `'medium'`, `'large'`, `'xlarge'` and `'xxlarge'`. Reflected as a property. |
| `elevation`  | false        | The elevation attribute denotes size of the component's box shadow. Valid values are null, ( `'1'`), (`'2'`) and ( `'3'`).
## Usage

```html
<squid-container  padding="normal" elevation="1" radius="4">
  <h1>Squid Container</h1>

  <p>Really just a fancy, accessible wrapper.</p>
</squid-container>
```