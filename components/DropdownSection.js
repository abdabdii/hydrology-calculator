import fruits from "./fruits.json" assert { type: "json" };
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import StatItem from "./StatItem";

export default function DropdownSection({
  inputValue,
  setInputValue,
  setX,
  setY,
  setQ,
}) {
  return (
    <div style={{ width: "500px" }}>
      Select the crop
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={fruits}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          if (newInputValue == "") {
            setQ("");
            setX("");
            setY("");
          }
        }}
        sx={{ width: 300, marginTop: "16px" }}
        autoCapitalize="true"
        renderInput={(params) => <TextField {...params} label="Crop" />}
      />
      <div style={{ display: "flex", width: "100%", gap: "15px" }}>
        {inputValue &&
          fruits
            .filter((fruit) => fruit.label == inputValue)
            .map((fruit) => {
              setQ(fruit.q);
              setX(fruit.x);
              setY(fruit.y);
              return (
                <>
                  <StatItem
                    key="horizontal"
                    label="Horizontal space"
                    value={`${fruit.x} m`}
                    SelectedIcon={StartOutlinedIcon}
                  />
                  <StatItem
                    key="vertical"
                    label="Vertical space"
                    value={`${fruit.y} m`}
                    SelectedIcon={UpgradeOutlinedIcon}
                  />
                  <StatItem
                    key="flow"
                    label="Max Req water"
                    value={`${fruit.q} L/day`}
                    SelectedIcon={WaterDropOutlinedIcon}
                  />
                </>
              );
            })}
      </div>
    </div>
  );
}
