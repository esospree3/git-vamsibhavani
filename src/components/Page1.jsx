import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: 5,
      }}
    >
      <Typography variant="h5" color="primary">
        Welcome to Page 1
      </Typography>
      <Typography variant="body1">
        This is the first page of the navigation app.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={() => navigate("/page2")}>
          Forward to Page 2
        </Button>
        <Button variant="outlined" onClick={() => navigate(-1)} disabled>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default Page1;
