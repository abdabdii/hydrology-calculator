import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DropdownSection from "./DropdownSection";
import InputBoxes from "./InputBoxes";


export default function Crop({
  inputValue,
  setInputValue,
  x,
  setX,
  y,
  setY,
  q,
  setQ,
}) {
  const [custom, setCustom] = useState("exist");
  const handleChange = (event) => {
    setCustom(event.target.value);
  };

  return (
    <>
      <h2>Crop details</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <FormControl style={{ marginBottom: "16px" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Exist or custom
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="exist"
            name="radio-buttons-group"
            value={custom}
            onChange={handleChange}
          >
            <FormControlLabel value="exist" control={<Radio />} label="Exist" />
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label="Custom"
            />
          </RadioGroup>
        </FormControl>
        {custom == "exist" ? (
          <DropdownSection
            inputValue={inputValue}
            setInputValue={setInputValue}
            setQ={setQ}
            setX={setX}
            setY={setY}
          />
        ) : (
          <InputBoxes x={x} setX={setX} y={y} setY={setY} q={q} setQ={setQ} />
        )}
      </div>
    </>
  );
}
