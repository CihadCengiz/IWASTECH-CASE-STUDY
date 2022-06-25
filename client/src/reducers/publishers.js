import {
    CREATE_PUBLISHER,
    RETRIEVE_PUBLISHERS,
    UPDATE_PUBLISHER,
    DELETE_PUBLISHER,
    DELETE_ALL_PUBLISHERS,
  } from "../actions/types";
  const initialState = [];
  function publisherReducer(publishers = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_PUBLISHER:
        return [...publishers, payload];
      case RETRIEVE_PUBLISHERS:
        return payload;
      case UPDATE_PUBLISHER:
        return publishers.map((publisher) => {
          if (publisher.id === payload.id) {
            return {
              ...publisher,
              ...payload,
            };
          } else {
            return publisher;
          }
        });
      case DELETE_PUBLISHER:
        return publishers.filter(({ id }) => id !== payload.id);
      case DELETE_ALL_PUBLISHERS:
        return [];
      default:
        return publishers;
    }
  };
  export default publisherReducer;
  