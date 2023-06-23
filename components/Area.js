import TextField from "@mui/material/TextField";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import { useState } from "react";
import { InputAdornment } from "@mui/material";

export default function Area() {
  const [width, setWidth] = useState();
  const [length, setLength] = useState();

  const area = Math.round((width * length)/4200);
  const areaSub = [Math.round(area/20), Math.round(area/30)];
  return (
    <>
      <h2 style={{ marginBottom: "32px" }}>Area Details</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          id="width"
          label="Width (m)"
          type="number"
          value={width}
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
          id="length"
          label="Length (m)"
          type="number"
          value={length}
          onChange={(event) => {
            setLength(event.target.value);
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
        <div style={{ }}>
          {width && length ? ( 
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Area</div>
                <p style={{ fontWeight: 800, fontSize: "32px", marginTop: "0" }}>
                  <AspectRatioOutlinedIcon style={{ color: "#2196f3", marginRight: "12px" }}/>
                    {area} fed
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Area Sub</div>
                <p style={{ fontWeight: 800, fontSize: "32px", marginTop: "0" }}>
                <AspectRatioOutlinedIcon style={{ color: "#2196f3", marginRight: "12px" }}/>
                  {areaSub[0]} - {areaSub[1]} fed
                </p>
              </div>
            </>
          )
            : ("")
          }
        </div>
      </div>
    </>
  );
}
