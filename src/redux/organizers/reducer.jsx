import {
  START_FETCHING_ORGANIZERS,
  ERROR_FETCHING_ORGANIZERS,
  SUCCESS_FETCHING_ORGANIZERS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_ORGANIZERS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_ORGANIZERS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_ORGANIZERS:
      return { ...state, status: statuslist.success, data: action.organizers };

    default:
      return state;
  }
};

export default reducer;
