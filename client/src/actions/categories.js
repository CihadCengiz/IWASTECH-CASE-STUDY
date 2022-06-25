import {
    CREATE_CATEGORY,
    RETRIEVE_CATEGORIES,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    DELETE_ALL_CATEGORIES
  } from "./types";
  import CategoryDataService from "../services/categoryService";
  export const createCategory = (categoryName) => async (dispatch) => {
    try {
      const res = await CategoryDataService.create({ categoryName });
      dispatch({
        type: CREATE_CATEGORY,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveCategories = () => async (dispatch) => {
    try {
      const res = await CategoryDataService.getAll();
      dispatch({
        type: RETRIEVE_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updateCategory = (id, data) => async (dispatch) => {
    try {
      const res = await CategoryDataService.update(id, data);
      dispatch({
        type: UPDATE_CATEGORY,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteCategory = (id) => async (dispatch) => {
    try {
      await CategoryDataService.delete(id);
      dispatch({
        type: DELETE_CATEGORY,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllCategories = () => async (dispatch) => {
    try {
      const res = await CategoryDataService.deleteAll();
      dispatch({
        type: DELETE_ALL_CATEGORIES,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const findCategoriesByName = (categoryName) => async (dispatch) => {
    try {
      const res = await CategoryDataService.findByName(categoryName);
      dispatch({
        type: RETRIEVE_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };