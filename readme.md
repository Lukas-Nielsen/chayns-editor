# chayns-editor

> A text Editor based on Toast UI editor for chayns

## Prerequisites

This project requires [React](https://react.dev/) and [chayns-css](https://github.com/TobitSoftware/chayns-css).

## Installation

To install and set up the library, run:

```sh
npm i chayns-editor
```

Or if you prefer using Yarn:

```sh
yarn add chayns-editor
```

## Usage

```tsx
import { Editor } from "chayns-editor";

const App = () => {
    return (
        <Editor >
    );
}
```

## API

### readOnly

default to `undefined`

```tsx
import { Editor } from "chayns-editor";

const App = () => {
    return (
        <Editor readOnly={true}>
    );
}
```

### autofocus

default to `undefined`

```tsx
import { Editor } from "chayns-editor";

const App = () => {
    return (
        <Editor autofocus={true}>
    );
}
```

### value

default to `undefined`

```tsx
import { Editor } from "chayns-editor";

const App = () => {
    return (
        <Editor value="**Lorem**">
    );
}
```

### value

default to `de`

> https://github.com/nhn/tui.editor/blob/master/docs/en/i18n.md

```tsx
import { Editor } from "chayns-editor";

const App = () => {
    return (
        <Editor language="uk">
    );
}
```

### onChange

default to `undefined`

```tsx
import { Editor } from "chayns-editor";

const App = () => {
    const handleChange = (e: string) => {
        // code
    }

    return (
        <Editor onChange={handleChange}>
    );
}
```

## Built With

-   [TOAST UI Editor](https://github.com/nhn/tui.editor)
-   [Font Awesome](https://fontawesome.com)

## Authors

-   **Lukas Nielsen** - [Lukas-Nielsen](https://github.com/Lukas-Nielsen)

## License

[MIT License](license) © Lukas Nielsen
