import {
  CREATE_AUTHOR,
  RETRIEVE_AUTHORS,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
  DELETE_ALL_AUTHORS,
} from './types';
import AuthorDataService from '../services/authorService';
export const createAuthor = (authorName) => async (dispatch) => {
  try {
    const res = await AuthorDataService.create({ authorName });
    dispatch({
      type: CREATE_AUTHOR,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveAuthors = () => async (dispatch) => {
  try {
    const res = await AuthorDataService.getAll();
    dispatch({
      type: RETRIEVE_AUTHORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateAuthor = (id, data) => async (dispatch) => {
  try {
    const res = await AuthorDataService.update(id, data);
    dispatch({
      type: UPDATE_AUTHOR,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteAuthor = (id) => async (dispatch) => {
  try {
    await AuthorDataService.delete(id);
    dispatch({
      type: DELETE_AUTHOR,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteAllAuthors = () => async (dispatch) => {
  try {
    const res = await AuthorDataService.deleteAll();
    dispatch({
      type: DELETE_ALL_AUTHORS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const findAuthorsByName = (authorName) => async (dispatch) => {
  try {
    const res = await AuthorDataService.findByName(authorName);
    dispatch({
      type: RETRIEVE_AUTHORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
