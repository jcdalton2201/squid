# SquidNav
## Detail

The `SquidNav` component is an of a  navigation element.
The base element for a navigation it has an anchor element for linking.

## Inherits

`SquidNav` inherits from [`LitElement`](https://lit.polymer-project.org/).

## Attributes

| Name             | Boolean      | Description                                       |
|------------------|--------------|---------------------------------------------------|
| `name`       | false         | The label for this element. |
| `theme`       | false         | sets a theme to "light" or "dark". Default value is light |



## Usage

```html
<squid-nav name='Search Engine' theme='dark'>
    <squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav>
    <squid-sub-nav href='https://bing.com' theme='dark'>Bing</squid-sub-nav>
</squid-nav>
```