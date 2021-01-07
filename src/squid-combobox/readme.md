# SquidCombobox

## Details

A combobox is a combination of input element and a select element much like a [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), but with some subtle differences. The W3C defines a combobox as:

> A combobox is a widget made up of the combination of two distinct elements: 1) a single-line textbox, and 2) an associated pop-up element for helping users set the value of the textbox. The popup may be a listbox, grid, tree, or dialog. Many implementations also include a third optional element -- a graphical button adjacent to the textbox, indicating the availability of the popup. Activating the button displays the popup if suggestions are available.
_[-source](https://www.w3.org/TR/wai-aria-practices/#combobox)_

## Inherits

`SquidButton` inherits from [`SquidInput`](../squid-input).

## Attributes

| Name          | Boolean      | Description                                       |
|---------------|--------------|---------------------------------------------------|
| `disabled`    | true         | A proxy for the input disabled attribute. Reflected as a property. |
| `required`    | true         | A proxy for the input disabled attribute. Reflected as a property. |
| `autofocus`   | true         | A proxy for the input autofocus attribute. Reflected as a property. |
| `tooltip`     | false        | Sets a tooltip on the combobox label using [`SquidTooltip`](../squid-tooltip). Reflected as a property. |
| `placeholder` | false        | A proxy for the input placeholder attribute. Reflected as a property. |
| `size`        | false        | Can set the size on the input. Reflected as a property. |
| `value`       | false        | Sets the input's value and emits an `squid-change` event when updated. Reflected as a property. |
| `datalabel`   | false        | Set the string to tell you what property you wish to show in your object array|
| `datavalue`   | false        | Set the string to tell you what property you wish to be your key in your object array|

## Proterties
| Name          |Type          | Description              |
|---------------|--------------|--------------------------|
| `data`        |Array[String] || Array[Objects]| This is the data set you wish to show in the popdown.  It can be an Array of Strings
or an Array of objects with datalabel and datavalue attributes set|

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `squid-change`       | Event        | A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time a new value is comitted. The event's `detail` property will contain the newly comitted value. |

## Usage

```html
<squid-combobox name="world" placeholder="Harry Potter characters">
  <label slot="label">Favorite Harry Potter Character</label>
</squid-combobox>
```