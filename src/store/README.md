# Redux Store

This directory is responsible for managing the global state of the application.

##Structure of the Store

| Path                     | Description                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `src/store/reducers/*`   | Separate reducers: Each reducer folder should have the following files: `index.ts`, `initState.ts`, `types.ts` |
| `src/store/index.ts`     | Here is the file in which we created our store:                                                                |
| `src/store/selectors.ts` | Here are the functions that accept Redux state as an argument and return data that is derived from that state. |

> For better understanding Redux Concepts, please, check out the links below.

- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
