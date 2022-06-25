import {
    CREATE_AUTHOR,
    RETRIEVE_AUTHORS,
    UPDATE_AUTHOR,
    DELETE_AUTHOR,
    DELETE_ALL_AUTHORS,
  } from "../actions/types";
  const initialState = [];
  function authorReducer(authors = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_AUTHOR:
        return [...authors, payload];
      case RETRIEVE_AUTHORS:
        return payload;
      case UPDATE_AUTHOR:
        return authors.map((author) => {
          if (author.id === payload.id) {
            return {
              ...author,
              ...payload,
            };
          } else {
            return author;
          }
        });
      case DELETE_AUTHOR:
        return authors.filter(({ id }) => id !== payload.id);
      case DELETE_ALL_AUTHORS:
        return [];
      default:
        return authors;
    }
  };
  export default authorReducer;
  