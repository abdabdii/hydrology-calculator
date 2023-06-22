import { InputAdornment, TextField } from "@mui/material";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";

export default function InputBoxes() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "16px",
        gap: "32px",
        color: "#2196f3",
        width: "500px",
      }}
    >
      <TextField
        id="horizontal"
        label="Horizontal space (m)"
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
        id="vertical"
        label="Vertical space (m)"
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
        id="flow"
        label="Max Req water (L/day)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WaterDropOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        style={{ marginRight: "16px", maxWidth: "300px" }}
      />
    </div>
  );
}
