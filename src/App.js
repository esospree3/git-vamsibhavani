import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Router>
      <Box sx={{ p: 5, minHeight: "2000vh", bgcolor: "background.default" }}>
        <Typography variant="h1" align="center" gutterBottom>
          Navigation App
        </Typography>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
