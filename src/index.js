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

store.dispatch(
  addBookActionCreator({
    id: 4,
    title: "Buku 4",
    productionYear: 2022,
    publish: true,
  })
);

store.dispatch(
  addBookActionCreator({
    id: 5,
    title: "Buku 5",
    productionYear: 2020,
    publish: false,
  })
);

store.dispatch(listBookActionCreator());

store.dispatch(
  updateBookActionCreator({
    id: 1,
    title: "Buku 1 Update",
    productionYear: 2022,
    publish: true,
  })
);

store.dispatch(listBookActionCreator());

store.dispatch(deleteBookActionCreator({ id: 1 }));

store.dispatch(listBookActionCreator());

store.dispatch(
  addBookActionCreator({
    id: 6,
    title: "Buku 6",
    productionYear: 2020,
    publish: false,
  })
);

store.dispatch(listBookActionCreator());

store.dispatch(getBookActionCreator({ id: 4 }));

store.dispatch(listBookActionCreator());
