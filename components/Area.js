import TextField from "@mui/material/TextField";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import { InputAdornment } from "@mui/material";
import StatPreview from "./StatPreview";

export default function Area({
  width,
  setWidth,
  height,
  setHeight,
  allowed,
  setAllowed,
}) {
  return (
    <>
      <h2 style={{ marginBottom: "32px" }}>Area Details</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "30px" }}>
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
          id="height"
          label="Height (m)"
          type="number"
          value={height}
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
          label="Allowed (20 ~ 30)"
          type="number"
          value={allowed}
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
        {width && height ?
          <StatPreview label="Area" 
            value={`${Math.round((width * height) / 4200)} fed`} 
            SelectedIcon={AspectRatioOutlinedIcon} 
          />  
          : ""
        }
      </div>
    </>
  );
}
