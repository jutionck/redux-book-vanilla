import {
  ADD_BOOK,
  DELETE_BOOK,
  GET_BOOK,
  LIST_BOOK,
  UPDATE_BOOK,
} from "../utils/types.js";

const initialState = {
  books: [
    {
      id: 1,
      title: "Buku 1",
      productionYear: 2022,
      publish: true,
    },
    {
      id: 2,
      title: "Buku 2",
      productionYear: 2023,
      publish: true,
    },
    {
      id: 3,
      title: "Buku 3",
      productionYear: 2020,
      publish: false,
    },
  ],
};

export function bookReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === ADD_BOOK) {
    console.log(ADD_BOOK);
    return { books: [...state.books, payload] };
  }

  if (type === LIST_BOOK) {
    console.log(LIST_BOOK);
    return { books: state.books };
  }

  if (type === GET_BOOK) {
    console.log(GET_BOOK);
    return {
      books: state.books.find((book) => book.id === payload.id),
    };
  }

  if (type === UPDATE_BOOK) {
    console.log(UPDATE_BOOK);
    return {
      books: state.books.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload };
        }
        return book;
      }),
    };
  }

  if (type === DELETE_BOOK) {
    console.log(DELETE_BOOK);
    return {
      books: state.books.filter((book) => book.id !== action.payload.id),
    };
  }

  return state;
}
