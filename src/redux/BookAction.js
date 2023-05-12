import {
  ADD_BOOK,
  DELETE_BOOK,
  GET_BOOK,
  LIST_BOOK,
  UPDATE_BOOK,
} from "../utils/types.js";

export function addBookActionCreator({ id, title, productionYear, publish }) {
  return {
    type: ADD_BOOK,
    payload: { id, title, productionYear, publish },
  };
}

export function listBookActionCreator() {
  return {
    type: LIST_BOOK,
  };
}

export function getBookActionCreator({ id }) {
  return {
    type: GET_BOOK,
    payload: { id },
  };
}

export function updateBookActionCreator({
  id,
  title,
  productionYear,
  publish,
}) {
  return {
    type: UPDATE_BOOK,
    payload: { id, title, productionYear, publish },
  };
}

export function deleteBookActionCreator({ id }) {
  return {
    type: DELETE_BOOK,
    payload: { id },
  };
}
