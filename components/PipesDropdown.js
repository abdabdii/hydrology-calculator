import pipes from "./pipes.json" assert { type: "json" };
import { useState } from "react";
import SpeedIcon from '@mui/icons-material/Speed';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import StatPreview from "./StatPreview";

export default function PipesDropdown ({ q, length, header }) {
    const [diameter, setDiameter] = useState(0)
    const diameterMeter = (diameter*0.0254).toFixed(4)
    let v = (( q ) / ( 0.78539816339 * (diameterMeter**2) )).toFixed(4)
    let red = 0
    if (v === "Infinity") {
        v = 0
        red = 0
    } else if (v > 2 || v < 1) {
        red = 1
    } else {
        red = 0
    }

    return (
        <div style={{display: "flex", flexDirection: "row", gap: "120px", flexWrap: "wrap", marginTop: "30px", }}>
            <h2 style={{width: "120px"}}>{header}</h2>
            <FormControl style={{ marginTop: "10px"}}>
                <InputLabel id="demo-simple-select-label1">Diameter</InputLabel>
                <Select
                    labelId="demo-simple-select-labe1l"
                    id="demo-simple-select1"
                    value={diameter}
                    style={{ width: "300px" }}
                    onChange={(event) => {
                     setDiameter(event.target.value);
                    }}
                    label="Diameter"
                >
                    {pipes.map((pipe) => (
                        <MenuItem key={`${pipe.SKU}-select-${pipe.internalD}`} value={pipe.internalD}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{marginRight: "50px"}}>
                                    {(pipe.internalD*25.4).toFixed(2)}
                                </div>
                                {pipe.SKU}
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

                <StatPreview SelectedIcon={SpeedIcon} label="Speed" value= {`${v} m/s`} valueNum={red} style={{marginBottom: "30px"}} />
                <StatPreview SelectedIcon={SpeedIcon} label="Length" value={`${length} m`} style={{marginTop: "10px"}}/>

        </div>
    );
}