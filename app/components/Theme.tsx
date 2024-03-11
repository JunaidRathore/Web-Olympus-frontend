"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const Theme = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
      },
      secondary: {
        main: "#AAAAAA",
      },
    },
    components: {
      //   MuiInputBase: {
      //     styleOverrides: {
      //       root: {
      //         borderColor: "#aaaaaa",
      //         background: "transparent",
      //         backgroundColor: "none"
      //         // color: "#fff",
      //       },
      //     },
      //   },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: "#AAA",
            "& fieldset": {
              borderColor: "#aaa",
            },
            "&:hover": {
              border: "0.1px solid #aaa",
            },
            "&:focus": {
              border: "1px solid #aaa",
            },
            borderRadius: "1px",
          },
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
export default Theme;
