# react-lite-input

This package provides a versatile `useInput` hook specifically designed to manage multiple input states within your React components. By leveraging techniques like `useCallback`, it optimizes re-renders, ensuring a smooth and responsive user experience.⚡️

## Installation

```
npm install react-lite-input
```

or

```
yarn add react-lite-input
```

## Usage

### Importing the Hook

First, import the `useInput` hook from the package:

```javascript
import useInput from "react-lite-input";
```

### Using the Hook

You can use the `useInput` hook to manage the state of multiple input fields. The hook takes an initial values object and returns an object containing the current values and a `handleLiteChange` function.

```javascript
import React from "react";
import useInput from "react-lite-input";

const MyForm = () => {
  const initialValues = { username: "", age: "" };
  const { values, handleLiteChange } = useInput(initialValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(values); // Access the input values

    // Access the username value
    console.log(`Your username is: ${values.username}`);

    // Perform other actions with the input values
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your username:
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleLiteChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

### API

```javascript
const { values, handleLiteChange } = useInput(initialValue: InitialValues);
```

- Parameters:
- - `initialValue` : An object with keys representing the input names and values representing the initial values of the inputs.

- Returns:
- - `values` : An object containing the current values of the inputs.
- - `handleLiteChange` : A function to handle input changes. It should be used as the onChange event handler for input elements.

### Testing

This package uses Jest for testing, make sure you have the following configurations setup in package.json file:

```json
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "jsdom",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    }
  }
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or enhancements.

## Licensing

This project is licensed under MIT license.
