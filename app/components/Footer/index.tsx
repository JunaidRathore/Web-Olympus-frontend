"use client";
import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
const Footer = () => {
  return (
    <Container>
      <Box
        className="footer"
        sx={{
          pt: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
            <Box>
              <Image
                alt="Logo"
                src="/images/web-olympous-logo.png"
                width={179}
                height={41}
              />
              <Box display="flex" gap={2} marginTop={3} alignItems="flex-end">
                <Image
                  alt="Logo"
                  src="/images/twitter.png"
                  width={16}
                  height={16}
                />
                <Image
                  alt="Logo"
                  src="/images/instagram.png"
                  width={16}
                  height={16}
                />
                <Image
                  alt="Logo"
                  src="/images/linkedin.png"
                  width={16}
                  height={16}
                />
                <Image alt="Logo" src="/images/be.png" width={16} height={14} />
                <Image
                  alt="Logo"
                  src="/images/globe.png"
                  width={16}
                  height={16}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h6" className="c-white">
                Quick Links
              </Typography>
              <ul className="footer-li">
                <li>About Us</li>
                <li>Pricing Table</li>
                <li>Contact Us</li>
                <li>Meet Our Team</li>
                <li>Latest News</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h6" className="c-white">
                Company
              </Typography>
              <ul className="footer-li">
                <li>Case Studies</li>
                <li>FAQ&aposs</li>
                <li>Services</li>
                <li>Customer Support</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h6" className="c-white">
                Legal
              </Typography>
              <ul className="footer-li">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography
            variant="body2"
            className="c-grey text-center"
            padding={"20px 0"}
            sx={{
              borderTop: "0.5px solid #AAAAAA",
            }}
          >
            © 2024 Web Olympus. All Right Reserved
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default Footer;
