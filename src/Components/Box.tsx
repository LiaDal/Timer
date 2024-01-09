import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

type BoxProps = {
  children: React.ReactNode;
};

export default function BoxSx(props: BoxProps) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#0277bd",
            dark: "#01579b",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginBottom: 6,
          marginTop: 6,
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "primary.main",
          boxShadow:
            "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
        }}
      >
        {props.children}
      </Box>
    </ThemeProvider>
  );
}
