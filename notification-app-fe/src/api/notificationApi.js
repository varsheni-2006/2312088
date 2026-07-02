import axios from "axios";

const token = import.meta.env.VITE_TOKEN;

const API = axios.create({
  baseURL: "http://4.224.186.213/evaluation-service",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const getNotifications = async (
  limit = 10,
  notificationType = ""
) => {
  let url = `/notifications?limit=${limit}`;

  if (notificationType !== "") {
    url += `&notification_type=${notificationType}`;
  }

  const response = await API.get(url);

  return response.data.notifications;
};