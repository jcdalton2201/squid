# SquidAlert

## Details


> Alerts allow for communication between a system and a user.
> There are two types of alerts; global alerts and in-app alerts. Global alerts are system-generated and persistent, while inline alerts are presented as feedback in response to a user interaction.

By default the `SquidAlert` element is a global alert, but can be toggled using the `type` attribute.

## Inherits

`SquidAlert` inherits from [`SquidBase`](../squid-base).

## Usage

### Global alert

```html
<squid-alert type="global">
  <p slot="message"><strong class="emphasis">Global alert</strong> message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
```

### Other alerts

```html
<h2>Success alert</h2>
<squid-alert type="success">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Warning alert</h2>
<squid-alert type="warning">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Error alert</h2>
<squid-alert type="error">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Informational alert</h2>
<squid-alert type="informational">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
```

## Attributes

| Name        | Boolean      | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `type`      | true         | The `type` attribute controls the type of the alert component. Valid types are `'global'`, `'success'`, `'warning'`, `'error'` or `'informational'`. For guidance on when to use which alert, see the ONE Design System documentation linked above. |

## Public API

| Name               | Type         | Description                                       |
|--------------------|--------------|---------------------------------------------------|
| `type`             | Property     | Reflective of the `type` attribute. Controls the alert's type and presentation |
| `remove`           | Method       | Will remove the method from the DOM. Typically this is called in conjunction with the user performing some action (either clicking the element's close or acknowledge buttons). |
| `alert-closed`     | Event        | The `alert-closed` event will be emitted whenever an alert is closed either by invoking the `SquidAlert.prototype.remove()` method or by some user action on the alert itself. |