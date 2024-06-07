import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import { clearNotif } from "../notif/actions";
import {
  START_FETCHING_ORGANIZERS,
  ERROR_FETCHING_ORGANIZERS,
  SUCCESS_FETCHING_ORGANIZERS,
} from "./constants";

let debouncedFetchOrganizers = debounce(getData, 1000);

export const startFetchingOrganizers = () => {
  return {
    type: START_FETCHING_ORGANIZERS,
  };
};

export const successFetchingOrganizers = ({ organizers }) => {
  return {
    type: SUCCESS_FETCHING_ORGANIZERS,
    organizers,
  };
};

export const errorrFetchingOrganizers = () => {
  return {
    type: ERROR_FETCHING_ORGANIZERS,
  };
};

export const fetchOrganizers = () => {
  return async (dispatch) => {
    dispatch(startFetchingOrganizers());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchOrganizers("/cms/organizers");

      let _temp = res.data.data.map((item) => {
        return {
          ...item,
          organizer: item.organizer.organizer,
        };
      });

      dispatch(successFetchingOrganizers({ organizers: _temp }));
    } catch (error) {
      dispatch(errorrFetchingOrganizers());
    }
  };
};
