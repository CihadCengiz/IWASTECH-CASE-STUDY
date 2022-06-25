import {
    CREATE_CATEGORY,
    RETRIEVE_CATEGORIES,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    DELETE_ALL_CATEGORIES,
  } from "../actions/types";
  const initialState = [];
  function categoryReducer(categories = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_CATEGORY:
        return [...categories, payload];
      case RETRIEVE_CATEGORIES:
        return payload;
      case UPDATE_CATEGORY:
        return categories.map((category) => {
          if (category.id === payload.id) {
            return {
              ...category,
              ...payload,
            };
          } else {
            return category;
          }
        });
      case DELETE_CATEGORY:
        return categories.filter(({ id }) => id !== payload.id);
      case DELETE_ALL_CATEGORIES:
        return [];
      default:
        return categories;
    }
  };
  export default categoryReducer;
  