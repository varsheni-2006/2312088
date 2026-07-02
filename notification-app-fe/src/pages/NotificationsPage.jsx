import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert,
} from "@mui/material";

import NotificationFilter from "../components/NotificationFilter";
import useNotifications from "../hooks/useNotifications";

const NotificationsPage = () => {
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(10);

  const { notifications, loading, error } = useNotifications(limit, type);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>

      <NotificationFilter
        type={type}
        setType={setType}
        limit={limit}
        setLimit={setLimit}
      />

      {loading && <CircularProgress />}

      {error && <Alert severity="error">{error}</Alert>}

      {!loading &&
        notifications.map((item) => (
          <Card key={item.ID} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.Type}</Typography>

              <Typography>{item.Message}</Typography>

              <Typography variant="body2">
                {item.Timestamp}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default NotificationsPage;