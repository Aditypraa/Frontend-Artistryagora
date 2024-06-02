import axios from "axios";
import { config } from "../configs";

const handleError = (error) => {
  const originalRequest = error.config;
  if (error.response.data.msg === "jwt expired") {
    originalRequest._retry = true;
    const session = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    // console.log("session");
    // console.log(session);

    return axios
      .get(
        `${config.VITE_API_HOST_DEV}/cms/refresh-token/${session.refreshToken}`
      )
      .then((res) => {
        // console.log("res");
        // console.log(res);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...session,
            token: res.data.data.token,
          })
        );
        originalRequest.headers.Authorization = `Bearer ${res.data.data.token}`;

        // console.log("originalRequest");
        // console.log(originalRequest);

        return axios(originalRequest);
      })
      .catch(() => {
        // console.log("err");
        // console.log(err);
        window.location.href = "/signin";
        localStorage.removeItem("auth");
      });
  }

  return error;
};

export default handleError;
