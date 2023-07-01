import PipesDropdown from "./PipesDropdown";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FormGroup, InputAdornment, MenuItem, Select, Typography } from "@mui/material";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import { useState } from "react";


export default function Inventory({ 
    qPerRow,
    nOfLinesPerSub,
    nOfSubs,
    qCrop
}) {
    const [qSprinkler, setQSprinkler] = useState(0);
    const khartomLength = nOfLinesPerSub * nOfSubs;
    const linesLength = 0;
    const subMainLength = 0;
    const MainLength = 0;
    // const subsStopcock = nOfSubs

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ marginBottom: "32px" }}>Inventory</h2>
            <div>
                <PipesDropdown header="Hose" q={qPerRow}  length={khartomLength}/>
                <Divider />
                <PipesDropdown header="Lines" q={qPerRow}  length={khartomLength}/>
                <Divider />
                <PipesDropdown header="Sub Main" q={qPerRow}  length={khartomLength}/>
                <Divider />
                <PipesDropdown header="Main" q={qPerRow}  length={khartomLength}/>
                <Divider />
                <div style={{marginBottom: "35px"}}>
                    <h2>Sprinklers</h2>
                    <TextField
                        id="water duty"
                        label="water duty"
                        type="number"
                        value={qSprinkler}
                        onFocus={(event) => {
                            event.target.select();
                        }}
                        onChange={(event) => {
                            setQSprinkler(event.target.value);
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
                </div>
                <Divider />
                <div>
                    <h2>Stopcock for subs</h2>
                    {nOfSubs}
                </div>
            </div>
        </div>
    );
}