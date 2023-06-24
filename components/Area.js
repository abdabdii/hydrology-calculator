import { useState } from "react";
import TextField from "@mui/material/TextField";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import { InputAdornment, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import StatPreview from "./StatPreview";
import { CustomSlider } from "./CustomSlider";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function Area({
  width,
  setWidth,
  height,
  setHeight,
  allowed,
  setAllowed,
  v,
  setV,
  hrs,
  setHrs,
  rows,
  setRows,
  irrg,
  setIrrg,
  windDir,
  setWindDir,
}) {
  const handleChange = (event) => {
    setWindDir(event.target.value);
  };
  // console.log(windDir)

  return (
    <>
      <h2 style={{ marginBottom: "32px" }}>Data input</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <TextField
          id="width"
          label="Width (m)"
          type="number"
          value={width}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => {
            setWidth(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StartOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{ marginRight: "16px", maxWidth: "300px" }}
        />
        <TextField
          id="height"
          label="Height (m)"
          type="number"
          value={height}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <UpgradeOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{ marginRight: "16px", maxWidth: "300px" }}
        />
        <TextField
          id="allowed"
          label="Sub Area (20 ~ 30) Fed"
          type="number"
          value={allowed}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => {
            setAllowed(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StartOutlinedIcon />
              </InputAdornment>
            ),
            inputProps: { min: 20, max: 30 },
          }}
          variant="outlined"
          style={{ marginRight: "16px", width: "150px" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          Velocity (m/s)
          <CustomSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            id="slider1"
            value={v}
            onChange={(event) => {
              setV(event.target.value);
            }}
            max={2}
            min={1}
            step={0.01}
          />
          <span>Current velocity: {v} m/s</span>
        </div>
        {width && height ? (
          <StatPreview
            label="Area"
            value={`${Math.round((width * height) / 4200)} fed`}
            SelectedIcon={AspectRatioOutlinedIcon}
          />
        ) : (
          <StatPreview
          label="Area"
          value= "0.0 fed"
          SelectedIcon={AspectRatioOutlinedIcon}
        />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <TextField
          id="hours"
          label="Hours for one sub"
          type="number"
          value={hrs}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => {
            setHrs(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{ marginRight: "16px", maxWidth: "300px" }}
        />
        <TextField
          id="rows"
          label="Number of rows"
          type="number"
          value={rows}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => {
            setRows(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DensitySmallIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{ marginRight: "16px", maxWidth: "300px" }}
        />
        <TextField
          id="irrginput"
          label="Number Of Subs Irrigated in paraller"
          type="number"
          value={irrg}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => {
            setIrrg(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LooksOneOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{ marginRight: "16px", maxWidth: "300px" }}
        />
      </div>
        
      <FormControl style={{ marginLeft: "41%"}}>
        <FormLabel id="demo-row-radio-buttons-group-label">Wind Direction</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="horizontal"
          value={windDir}
          onChange={handleChange}
        >
          <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
          <FormControlLabel value="verticals" control={<Radio />} label="Verticals" />
        </RadioGroup>
      </FormControl>


    </>
  );
}