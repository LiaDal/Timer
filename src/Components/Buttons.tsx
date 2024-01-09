import { styled } from "@mui/system";
const Buttons = styled("button")({
  color: "white",
  backgroundColor: "#0277bd",
  "&:hover": {
    background: "#0288d1",
  },
  width: 80,
  height: 40,
  margin: 10,
  padding: 8,
  borderRadius: 5,
  borderColor: "white",
});

export default Buttons;
