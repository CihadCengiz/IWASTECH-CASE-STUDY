import {
    CREATE_PUBLISHER,
    RETRIEVE_PUBLISHERS,
    UPDATE_PUBLISHER,
    DELETE_PUBLISHER,
    DELETE_ALL_PUBLISHERS
  } from "./types";
  import PublisherDataService from "../services/publisherService";
  export const createPublisher = (publisherName) => async (dispatch) => {
    try {
      const res = await PublisherDataService.create({ publisherName });
      dispatch({
        type: CREATE_PUBLISHER,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrievePublishers = () => async (dispatch) => {
    try {
      const res = await PublisherDataService.getAll();
      dispatch({
        type: RETRIEVE_PUBLISHERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updatePublisher = (id, data) => async (dispatch) => {
    try {
      const res = await PublisherDataService.update(id, data);
      dispatch({
        type: UPDATE_PUBLISHER,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deletePublisher = (id) => async (dispatch) => {
    try {
      await PublisherDataService.delete(id);
      dispatch({
        type: DELETE_PUBLISHER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllPublishers = () => async (dispatch) => {
    try {
      const res = await PublisherDataService.deleteAll();
      dispatch({
        type: DELETE_ALL_PUBLISHERS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const findPublishersByName = (publisherName) => async (dispatch) => {
    try {
      const res = await PublisherDataService.findByName(publisherName);
      dispatch({
        type: RETRIEVE_PUBLISHERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };