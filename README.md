# <img src="logo.png" width="70" height="70"> Squid

Common Web Components for the Arenish Fair Financial Group organization.

Intested in [contributing](CONTRIBUTING.MD)?

Squid is an implementation of the  [Arenish Fair Design](https://none/Arenish Fair%20Design) written entirely in native web components. Not familiar with the web components spec? There are plenty of tutorials and resources available to get started.

- [Web components specification](https://github.com/w3c/webcomponents)
- [WebComponents.org](https://www.webcomponents.org/)
- [MDN Web Components article](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [MDN Custom Elements article](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)
- [MDN Shadow DOM article](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)

If you want to know more about the web components spec, reach out to [Jason Dalton](mailto:jdalton@hotmaile.com).

## Why web components

Web components are highly-portable pieces of code that can be used, developed and maintained without any framework or outside dependencies. They are compatible with Angular, React, Vue, Ember or just vanilla JS without too much extra fuss which makes them a perfect tool for writing reusable, scalable components.

Even some frameworks have gotten on board the web components train. Currently Vue and Angular allow authors to export their components as web components. Squid, however, believes that the best way to write to the future is to write to the specifications. While Angular and Vue can export as web components, authoring core code using those frameworks makes you beholden to outside patterns and tools. Considering how easy it is to write your own custom elements, the negatives of using those tools for [atomic components](http://bradfrost.com/blog/post/atomic-web-design/) in particular outweigh the benefits.

## Current components

- [AccordionGroup](./src/squid-accordion-group)
- [Alert](./src/squid-alert)
- [Calendar](./src/squid-calendar)
- [Accordion](./src/squid-accordion)
- [A](./src/squid-a)
- [Button](./src/squid-button)
- [CharacterCount](./src/squid-character-count)
- [CheckboxGroup](./src/squid-checkbox-group)
- [Checkbox](./src/squid-checkbox)
- [Combobox](./src/squid-combobox)
- [Currency](./src/squid-currency)
- [Container](./src/squid-container)
- [Datepicker](./src/squid-datepicker)
- [Dialog](./src/squid-dialog)
- [Email](./src/squid-email)
- [Errors](./src/squid-errors)
- [HeroNumber](./src/squid-hero-number)
- [Input](./src/squid-input)
- [Drawer](./src/squid-drawer)
- [CreditCard](./src/squid-credit-card)
- [InputBase](./src/squid-input-base)
- [InputMask](./src/squid-input-mask)
- [Number](./src/squid-number)
- [Password](./src/squid-password)
- [Nav](./src/squid-nav)
- [NavGroup](./src/squid-nav-group)
- [Radio](./src/squid-radio)
- [RadioGroup](./src/squid-radio-group)
- [Select](./src/squid-select)
- [Ssn](./src/squid-ssn)
- [Textarea](./src/squid-textarea)
- [Toggle](./src/squid-toggle)
- [SubNav](./src/squid-sub-nav)
- [Telephone](./src/squid-telephone)
- [Stepper](./src/squid-stepper)

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
"@arenish-fair/squid" : "^0.0.1"
```

In the app.module.[ts,js] add `CUSTOM_ELEMENTS_SCHEMA` for the import and schema. Here is an example in typescript.

Or simply run `npm i @arenish-fair/squid`. Make sure to have .npmrc set up to point to the Azure Devops server for Arenish Fair artifacts.

```bash
#registry=https://arenish-fair.visualstudio.com/
```

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    