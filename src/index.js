import { bookStore } from "./Store.js";
import {
  addBookActionCreator,
  deleteBookActionCreator,
  getBookActionCreator,
  listBookActionCreator,
  updateBookActionCreator,
} from "./redux/BookAction.js";
import { bookReducer } from "./redux/BookReducer.js";

const store = bookStore(bookReducer);

store.dispatch(listBookActionCreator());

store.dispatch(deleteBookActionCreator({ id: 1 }));

store.dispatch(listBookActionCreator());

store.dispatch(
  addBookActionCreator({
    id: 4,
    title: "Buku 4",
    productionYear: 2020,
    publish: false,
  })
);

store.dispatch(listBookActionCreator());

store.dispatch(
  updateBookActionCreator({
    id: 4,
    title: "Buku 4 update",
    productionYear: 2020,
    publish: false,
  })
);

store.dispatch(listBookActionCreator());

store.dispatch(getBookActionCreator({ id: 4 }));

store.dispatch(listBookActionCreator());
