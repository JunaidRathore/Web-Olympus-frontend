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
              "& fieldset": {
                borderColor: "#aaa !important",
              },
            },
            "&:focus": {
              borderColor: "#aaa !important",
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
