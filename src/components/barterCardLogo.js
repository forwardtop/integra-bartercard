import React from "react";
import logoSrc from "./../assets/Bartercard_logo.jpg";
import { Typography, Container, Grid } from "@mui/material";

// This component renders a centered title with a logo on the right using MUI
const BarterCardLogo = () => {
  return (
    <Container maxWidth="xl">
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        {/* Title Section */}
        <Grid item xs={12} md={10} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1" sx={{ color: "#a6ce37" }}>
            Use Bartercard for your communication needs
          </Typography>
        </Grid>

        {/* Logo Section */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={logoSrc}
            alt="Logo"
            style={{ width: "10rem", height: "10rem", objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BarterCardLogo;
