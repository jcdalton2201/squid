# SquidNavGroup
## Detail

The `SquidNavGroup` component is an of a  navigation element.
This is a group of squid nav elements.

## Inherits

`SquidNavGroup` inherits from [`LitElement`](https://lit.polymer-project.org/).

## Attributes

| Name             | Boolean      | Description                                       |
|------------------|--------------|---------------------------------------------------|
| `theme`       | false         | sets a theme to "light" or "dark". Default value is light |



## Usage

```html
<squid-nav-group>
    <squid-nav name='Search Engine' theme='dark'>
        <squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav>
        <squid-sub-nav href='https://bing.com' theme='dark'>Bing</squid-sub-nav>
    </squid-nav>
    <squid-nav name='News' theme='dark'>
        <squid-sub-nav href='https://CNN.com' theme='dark'>CNN</squid-sub-nav>
        <squid-sub-nav href='https://www.bbc.co.uk/news' theme='dark'>BBC</squid-sub-nav>
    </squid-nav>
</squid-nav-group>
```