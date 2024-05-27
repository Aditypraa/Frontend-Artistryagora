import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, role) {
  return {
    type: USER_LOGIN,
    token,
    role,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
