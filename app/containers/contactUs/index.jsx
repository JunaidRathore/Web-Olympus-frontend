"use client";
import React from "react";
import Image from "next/image";
import { Container, Grid, Box, Typography } from "@mui/material";

import Form from "./form";
const ContactUsIndex = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2} margin={{ lg: "80px 0", xs: "20px 0" }}>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{
              pl: { lg: "16px", xs: "0 !important" },
            }}
          >
            <Box
              className="contact-form"
              marginLeft={{ lg: "85px", xs: "0px" }}
              paddingRight={{ lg: "0", xs: "16px" }}
            >
              <Typography variant="h3" className="c-white">
                Contact Us
              </Typography>
              <Typography variant="body2" className="c-grey">
                Book a call or write us to discover our different options.
                Whether its membership for recurring missions or more classic
                quotes for big projects, we have the right package for you.
              </Typography>
              <Form />
            </Box>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: { lg: "block", xs: "none" },
            }}
          >
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
      </Container>
    </>
  );
};
export default ContactUsIndex;
