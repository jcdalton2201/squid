# SquidCheckboxGroup

## Details

Creates an accessible checkbox group using [`SquidCheckbox`](../squid-checkbox) or a similar component.

The `SquidCheckbox` element is an implementation of the [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

> Checkboxes are used to select a single item or multiple items. A checkbox has two selection states: unselected and selected.
> The difference between radio buttons and checkboxes is that a radio button is for a single selection from a set of options and a checkbox allows for multiple selections from a set of options.
> The main difference between a toggle and a checkbox is that the [toggle switch](../squid-toggle) is for action and checkbox is for status.

## Inherits

`SquidCheckboxGroup` inherits from [`SquidBaseElement`](../baseElement).

## Attributes

| Name          | Boolean      | Description                                       |
|---------------|--------------|---------------------------------------------------|
| `legend`      | false        | Set the fieldset's legend text. Reflected as a property. |

## Public API

| Name               | Type             | Description                                       |
|--------------------|------------------|---------------------------------------------------|
| `tagName`          | Static property  | By default set to `squid-checkbox`. This tells the component what tag name to check for changes on. Must be set before the element is created. After that, changes will cause unexpected behavior. |
| `squid-change`       | Event            | A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time a new value is comitted. The event's `detail` property will contain the newly comitted value.  This value will always be an array. |

## Usage

```html
<squid-checkbox-group legend="Favorite Star Wars Movies">
  <squid-checkbox value="The Phantom Menace" disabled>The Phantom Menace</squid-checkbox>
  <squid-checkbox value="Attack of the Clones" disabled>Attack of the Clones</squid-checkbox>
  <squid-checkbox value="Revenge of the Sith" disabled>Revenge of the Sith</squid-checkbox>
  <squid-checkbox value="A New Hope">A New Hope</squid-checkbox>
  <squid-checkbox value="The Empire Strikes Back">The Empire Strikes Back</squid-checkbox>
  <squid-checkbox value="Return of the Jedi">Return of the Jedi</squid-checkbox>
  <squid-checkbox value="The Force Awakens">The Force Awakens</squid-checkbox>
  <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
  <squid-checkbox value="Rogue One">Rogue One</squid-checkbox>
  <squid-checkbox value="Solo">Solo</squid-checkbox>
</squid-checkbox-group>
```