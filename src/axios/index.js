import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "https://home-chore-tracker.herokuapp.com/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });

  return instance;
}
