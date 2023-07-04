import StatPreview from "../StatPreview";
import BorderOuterIcon from "@mui/icons-material/BorderOuter";
import AvailableDiameters from "../AvailableDiameters.json" assert { type: "json" };
import ForestIcon from "@mui/icons-material/Forest";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import HeatPumpIcon from "@mui/icons-material/HeatPump";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import GrassIcon from "@mui/icons-material/Grass";
import Inventory from "@/components/Inventory";
import { Divider } from "@mui/material";


const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, auto)",
  gap: "40px",
  gridRowGap: "30px",
  marginLeft: "80px",
};

export default function PlanningResult({
  width,
  height,
  x,
  y,
  q,
  v,
  allowed,
  hrs,
  rows,
  irr,
  area,
  lines,
  palmQ,
  gasQ,
  subRoad,
  mainRoad,
  diameter,
  setDiameter,
  qMax,
  windDir,
  design
}) {

  const circleArea = Number((0.78539816339 * (diameter**2)) / 4200).toFixed(3);
  
  const nOfTrees = design == "flow" ? Math.floor(Number((qMax * circleArea)/(q*.001))) : Math.floor(Number(circleArea *4200 / (x*y)))
  const nOfCirclesX = Math.floor(width / diameter);
  const nOfCirclesY = Math.floor(height / diameter);
  const totalCircles = nOfCirclesX * nOfCirclesY;
  const requiredWaterPerCircle =  (nOfTrees * (q*.001) ) / hrs 
  const quantityCultivatedPerIrr = Number(requiredWaterPerCircle * irr).toFixed(3);
  console.log(palmQ);
  console.log(quantityCultivatedPerIrr);
  console.log(quantityCultivatedPerIrr + Number(palmQ / hrs) + Number(gasQ / hrs));

  const qPump = Number(
    Number(quantityCultivatedPerIrr) + Number(palmQ / hrs) + Number(gasQ / hrs)
  ).toFixed(2); // n of rows
  const z = totalCircles / irr;
  const nOfWorkingHours = Number((hrs * z).toFixed(2));
  const mainLineDiameter = Number(
    Math.sqrt(qPump / (0.78539816339 * v * 60 * 60)) * 1000
  ).toFixed(2);


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginBottom: "32px" }}>Results</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#2196f3" }}>General Results</h3>
        <div style={style}>
          <StatPreview
            label="Mainline diameter"
            value={`${mainLineDiameter} mm`}
            SelectedIcon={CircleOutlinedIcon}
          />
          <StatPreview
            label="Total Pivots"
            value={`${totalCircles} Pivot`}
            SelectedIcon={CircleOutlinedIcon}
          />
          <StatPreview
            label="Q per Pivot"
            value={`${Number(requiredWaterPerCircle).toFixed(5)} m³/hr`}
            SelectedIcon={WaterDropIcon}
          />
          <StatPreview
            label="Number of trees per Pivot"
            value={`${nOfTrees} Tree`}
            SelectedIcon={ForestIcon}
          />
          <StatPreview
            label="Q pump"
            value={`${qPump} m³/hr`}
            SelectedIcon={HeatPumpIcon}
          />
          <StatPreview
            label="Number of working hours"
            value={`${nOfWorkingHours} hr`}
            SelectedIcon={QueryBuilderIcon}
            limitedValue={18}
            valueNum={nOfWorkingHours}
          />
        </div>
      </div>    
    </div>
  );
}
