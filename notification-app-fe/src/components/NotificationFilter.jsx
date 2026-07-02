import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const NotificationFilter = ({
  type,
  setType,
  limit,
  setLimit,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        mb: 3,
        flexWrap: "wrap",
      }}
    >
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Notification Type</InputLabel>

        <Select
          value={type}
          label="Notification Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Event">Event</MenuItem>

          <MenuItem value="Result">Result</MenuItem>

          <MenuItem value="Placement">Placement</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel>Top N</InputLabel>

        <Select
          value={limit}
          label="Top N"
          onChange={(e) => setLimit(e.target.value)}
        >
          <MenuItem value={10}>10</MenuItem>

          <MenuItem value={15}>15</MenuItem>

          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NotificationFilter;