import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StartPageStyled = styled("div")({
  padding: 8,
  marginTop: "8em",
});

const Button = styled("button")({
  color: "white",
  backgroundColor: "#0277bd",
  "&:hover": {
    background: "#0288d1",
  },
  width: 100,
  height: 60,
  margin: 10,
  padding: 8,
  borderRadius: 5,
  borderColor: "white",
});

function StartPage() {
  return (
    <StartPageStyled>
      <Link to="/Countdown">
        <Button>Countdown</Button>
      </Link>
      <Link to="/Timer">
        <Button>Timer</Button>
      </Link>
    </StartPageStyled>
  );
}

export default StartPage;
