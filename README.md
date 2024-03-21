## Getting Started

Install dependencies.

Use `18.19.0` for `node` version, and `10.2.3` for `npm` version.
To install and manage node versions you can install [nvm](https://github.com/nvm-sh/nvm)

`npm install`

Then, run the development server:

```npm run start``` - for Web

```npm run electron-start``` - for Electron (make sure when starting Electron in the file `webpack.config.js` the `publicPath` is commented and the commented `meta` opened in `index.html`)

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Project Structure

### Project folders

| Path          | Description                                                            |
|---------------|------------------------------------------------------------------------|
| `components/` | React abstract components folder                                       |
| `types/`      | Global Typescript types                                                |
| `utils/`      | Small usefull globally used utilities                                  |
| `hooks/`      | React custom hooks for this project                                    |
| `services/`   | Services to handle connections (Api requests, LocalStorage, Cookie...) |
| `store/`      | Store for global state management                                      |
| `pages/`      | Router paths pages                                                     |
| `styles/`     | Global styles                                                          |


## External libraries

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Router](https://reactrouter.com/)
- [Electron](https://www.electronjs.org/)
- [Webpack](https://webpack.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)


## Linting

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting

## Tests

This project uses [Vitest](https://vitest.dev/) for testing. To run the tests, use the following command:
```npm run test```
For test files using `__tests__` folder.

For mock API requests using [MSW](https://mswjs.io/).