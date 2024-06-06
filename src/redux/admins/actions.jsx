import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import { clearNotif } from "../notif/actions";
import {
  START_FETCHING_ADMINS,
  SUCCESS_FETCHING_ADMINS,
  ERROR_FETCHING_ADMINS,
} from "./constants";

let debouncedFetchAdmin = debounce(getData, 1000);

export const startFetchingAdmin = () => {
  return {
    type: START_FETCHING_ADMINS,
  };
};

export const successFetchingAdmin = ({ admins }) => {
  return {
    type: SUCCESS_FETCHING_ADMINS,
    admins,
  };
};

export const errorrFetchingAdmin = () => {
  return {
    type: ERROR_FETCHING_ADMINS,
  };
};

export const fetchAdmins = () => {
  return async (dispatch) => {
    dispatch(startFetchingAdmin());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchAdmin("/cms/users");

      dispatch(successFetchingAdmin({ admins: res.data.data }));
    } catch (error) {
      dispatch(errorrFetchingAdmin());
    }
  };
};
