import React, { useEffect, useCallback, useState } from "react";
import { TextField } from "@mui/material";
import BoxSx from "./Box.tsx";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Buttons from "./Buttons.tsx";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const TextFieldStyled = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & label {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

const CustomSlider = styled(Slider)`
  & .MuiSlider-thumb {
    color: white;
  }
  ,
  & .MuiSlider-track {
    color: white;
  }
  ,
  & .muislider-rail: {
    color: white;
  }
  ,
  & .muislider-active: {
    color: white;
  }
`;

function Countdown() {
  const [seconds, setSeconds] = useState<number>(0);
  const [initialValue, setInitialValue] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [filled, setFilled] = useState<number>(100);
  const [breakSound, setBreakSound] = useState(new Audio("breakSound.mp3"));

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    // if (seconds === 0 && !running) {
    //   playBreakSound();
    // }
    return () => clearInterval(interval);
  }, [seconds, running]);

  useEffect(() => {
    if (running) {
      setFilled((seconds * 100) / initialValue);
    }
  }, [filled, seconds]);

  const changeSeconds = useCallback((event) => {
    setInitialValue(event.target.value);
    setSeconds(event.target.value);
  }, []);

  const startTimer = () => {
    if (seconds !== 0) setRunning(true);
  };

  const playBreakSound = useCallback(() => {
    breakSound.currentTime = 0;
    breakSound.play();
  }, []);

  const timeFormat = useCallback(
    (seconds: number) => {
      if (seconds < 3600)
        return new Date(seconds * 1000).toISOString().substring(14, 14 + 5);

      return new Date(seconds * 1000).toISOString().substring(11, 11 + 8);
    },
    [seconds]
  );

  return (
    <>
      <Typography variant="h3">Countdown</Typography>
      <BoxSx>
        <h3>
          <span>{timeFormat(seconds)}</span>
        </h3>
      </BoxSx>
      {running ? (
        <TextFieldStyled disabled value={seconds} />
      ) : (
        <TextFieldStyled
          id="outlined-number"
          label="Enter seconds"
          type="number"
          value={seconds}
          onChange={changeSeconds}
          inputProps={{
            step: "15",
            style: { color: "white" },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      {running ? (
        <Box sx={{ width: 300, margin: "auto", padding: 2 }}>
          <Slider disabled aria-label="Disabled slider" min={0} max={60} />
        </Box>
      ) : (
        <Box sx={{ width: 300, margin: "auto", padding: 2 }}>
          <CustomSlider
            aria-label="Temperature"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={15}
            marks
            min={0}
            max={60}
            onChange={changeSeconds}
          />
        </Box>
      )}
      <div>
        <p>{Math.trunc(filled)}%</p>
        {running ? (
          <Buttons onClick={() => setRunning(false)}>Stop</Buttons>
        ) : (
          <Buttons
            onClick={() => {
              setRunning(true);
              startTimer();
            }}
          >
            Start
          </Buttons>
        )}
        <Buttons
          onClick={() => {
            setRunning(false);
            setSeconds(0);
            setFilled(100);
          }}
        >
          Reset
        </Buttons>
      </div>
    </>
  );
}

export default Countdown;
