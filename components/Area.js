import TextField from "@mui/material/TextField";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import { useState } from "react";
import { InputAdornment } from "@mui/material";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SubSlider from "./SubSlider";


export default function Area() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [nofSubs, setNofSubs] = useState(20);

  const area = Math.round((width * length)/4200);
  const subArea = Number((area/nofSubs).toFixed(2));
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
          style={{ marginRight: "16px" }}
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
          style={{ marginRight: "16px" }}
        />

        <SubSlider setNofSubs={setNofSubs} />
      </div>
      <>
          {width && length ? ( 
            <div style={{display: "flex", justifyContent: "space-around", marginTop: "60px"}}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Area</div>
                <p style={{ fontWeight: 800, fontSize: "32px", marginTop: "0" }}>
                  <AspectRatioOutlinedIcon style={{ color: "#2196f3", marginRight: "12px" }}/>
                    {area} fed
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Sub Area</div>
                <p style={{ fontWeight: 800, fontSize: "32px", marginTop: "0" }}>
                <FormatListNumberedIcon style={{ color: "#2196f3", marginRight: "12px" }}/>
                  {subArea} fed
                </p>
              </div>
            </div>
          )
            : ("")
          }
      </>
    </>
  );
}
