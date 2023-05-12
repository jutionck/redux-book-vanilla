import { legacy_createStore as createStore } from "redux";

export function bookStore(reducer) {
  const store = createStore(reducer);

  store.getState();

  store.subscribe(() => {
    console.log(store.getState());
  });

  return store;
}
