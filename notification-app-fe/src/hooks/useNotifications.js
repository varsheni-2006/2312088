import { useEffect, useState } from "react";
import { getNotifications } from "../api/notificationApi";

const useNotifications = (limit, notificationType) => {
  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotifications();
  }, [limit, notificationType]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);

      const data = await getNotifications(limit, notificationType);

      setNotifications(data);

      setError("");
    } catch (err) {
      setError("Unable to fetch notifications");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    notifications,
    loading,
    error,
  };
};

export default useNotifications;