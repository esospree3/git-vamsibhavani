import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h5" color="secondary">
        Welcome to Page 2
      </Typography>
      <Typography variant="body1">
        This is the second page of the navigation app.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back to Page 1
        </Button>
        <Button variant="contained" onClick={() => navigate("/")} disabled>
          Forward
        </Button>
      </Box>
    </Box>
  );
};

export default Page2;
