import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "./form"
import { Container, Grid, Box, Typography } from "@mui/material";
const ContactUsIndex = () => {
  return (
    <Container>
      <Header />
      <Grid container spacing={2} margin="20px 0">
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Box className="contact-form">
            <Typography variant="h3" className="c-white">
              Contact Us
            </Typography>
            <Typography variant="body2" className="c-grey">
              Book a call or write us to discover our different options. Whether
              its membership for recurring missions or more classic quotes
              for big projects, we have the right package for you.
            </Typography>
            <Form />
          </Box>
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Box textAlign="right">
            <Image
              alt="image"
              src="/images/olympus.png"
              width={360}
              height={360}
              className="contact-image"
            />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};
export default ContactUsIndex;
