# <img src="logo.svg" width="70" height="70"> Squid

Common Web Components for the Populus Financial Group organization.

Intested in [contributing](CONTRIBUTING.MD)?

Squid is an implementation of the  [PFG Design](https://acecashexpress.visualstudio.com/PFG%20Design) written entirely in native web components. Not familiar with the web components spec? There are plenty of tutorials and resources available to get started.

- [Web components specification](https://github.com/w3c/webcomponents)
- [WebComponents.org](https://www.webcomponents.org/)
- [MDN Web Components article](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [MDN Custom Elements article](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)
- [MDN Shadow DOM article](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)

If you want to know more about the web components spec, reach out to [Jason Dalton](mailto:jdalton@acecashexpress.com).

## Why web components

Web components are highly-portable pieces of code that can be used, developed and maintained without any framework or outside dependencies. They are compatible with Angular, React, Vue, Ember or just vanilla JS without too much extra fuss which makes them a perfect tool for writing reusable, scalable components.

Even some frameworks have gotten on board the web components train. Currently Vue and Angular allow authors to export their components as web components. Squid, however, believes that the best way to write to the future is to write to the specifications. While Angular and Vue can export as web components, authoring core code using those frameworks makes you beholden to outside patterns and tools. Considering how easy it is to write your own custom elements, the negatives of using those tools for [atomic components](http://bradfrost.com/blog/post/atomic-web-design/) in particular outweigh the benefits.

## Current components

- [A](./src/squid-a/squid-a.md)
- [Accordion](./src/squid-accordion/squid-accordion.md)
- [AccordionGroup](./src/squid-accordion-group/squid-accordion-group.md)
- [Alert](./src/squid-alert/squid-alert.md)
- [Button](./src/squid-button/squid-button.md)
- [Calendar](./src/squid-calendar/squid-calendar.md)
- [CharacterCount](./src/squid-character-count/squid-character-count.md)
- [Checkbox](./src/squid-checkbox/squid-checkbox.md)
- [CheckboxGroup](./src/squid-checkbox-group/squid-checkbox-group.md)
- [Combobox](./src/squid-combobox/squid-combobox.md)
- [Container](./src/squid-container/squid-container.md)
- [Currency](./src/squid-currency/squid-currency.md)
- [Datepicker](./src/squid-datepicker/squid-datepicker.md)
- [Dialog](./src/squid-dialog/squid-dialog.md)
- [Drawer](./src/squid-drawer/squid-drawer.md)
- [Email](./src/squid-email/squid-email.md)
- [Errors](./src/squid-errors/squid-errors.md)
- [HeroNumber](./src/squid-hero-number/squid-hero-number.md)
- [Input](./src/squid-input/squid-input.md)
- [InputBase](./src/squid-input-base/squid-input-base.md)
- [InputMask](./src/squid-input-mask/squid-input-mask.md)
- [Nav](./src/squid-nav/squid-nav.md)
- [NavGroup](./src/squid-nav-group/squid-nav-group.md)
- [Number](./src/squid-number/squid-number.md)
- [Password](./src/squid-password/squid-password.md)
- [Radio](./src/squid-radio/squid-radio.md)
- [RadioGroup](./src/squid-radio-group/squid-radio-group.md)
- [Select](./src/squid-select/squid-select.md)
- [Ssn](./src/squid-ssn/squid-ssn.md)
- [Stepper](./src/squid-stepper/squid-stepper.md)
- [SubNav](./src/squid-sub-nav/squid-sub-nav.md)
- [Telephone](./src/squid-telephone/squid-telephone.md)
- [Textarea](./src/squid-textarea/squid-textarea.md)
- [Toggle](./src/squid-toggle/squid-toggle.md)

## Local development

### Start up

Create a fork of this repo and clone the code on to your computer. Once the code has finished installing, open a terminal window and navigate to the directory containing the code and run the `npm install` command to install the development dependencies.

### Commands

| Command           | Description                                     |
|:------------------|:------------------------------------------------|
| `npm start`       | Starts the local development server at [http://localhost:3000](http://localhost:3000) and sets up watches that compile the code. The browser window will update with any changes you make. |
| `npm test`        | Runs the unit tests in the [test directory](./test) |
| `npm run coverage`        | Runs the unit tests with coverage in the [coverage directory](./coverage) |
| `npm run build`   | Create a clean build into the [dist directory](./dist) |
| `npm run storybook` | Run the storybook, which is also [the documentation for the library](https://storybook.js.org/). |
| `npm run docs` | Run the build for storybook docs. [docs directory](./docs)|

## Usage

### Installation

In the package.json add to the dependencies add the line.

```json
"@populus/squid" : "^0.0.1"
```

In the app.module.[ts,js] add `CUSTOM_ELEMENTS_SCHEMA` for the import and schema. Here is an example in typescript.

Or simply run `npm i @populus/squid`. Make sure to have .npmrc set up to point to the Azure Devops server for populus artifacts.

```bash
#registry=https://acecashexpress.visualstudio.com/
```

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    