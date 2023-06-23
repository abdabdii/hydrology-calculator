import StatPreview from "./StatPreview";
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import ForestIcon from '@mui/icons-material/Forest';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import GrassIcon from '@mui/icons-material/Grass';

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, auto)",
  gap: "40px",
  gridRowGap: "30px",
  marginLeft: "80px"
}

export default function PlanningResult({width, height, x, y, q, allowed, area }) {
  const nOfSubs = Number((area/allowed).toFixed(2)); 
  const nOfTrees = Math.floor((allowed*4200)/x*y); 
  const qSubArea = Number(((q*nOfTrees)/1000).toFixed(2)); 
  const hoursPerIrrg = 3      //hours input
  const qSubHour = ((qSubArea/hoursPerIrrg).toFixed(2)); 
  const subIrrgHour = 2                        // subs Irrigated per hour
  const qPump = Number((qSubHour*subIrrgHour).toFixed(2));             // n of rows
  const z = nOfSubs / subIrrgHour
  const nOfWorkingHours = Number((hoursPerIrrg * z).toFixed(2)); 
  const widthOfSub = width/(nOfSubs / 2)            // n of rows
  const hightOfSub = height/2
  const treesPerRow = Math.floor(widthOfSub/x);
  const nOfLinesPerSub = hightOfSub/y  
  const qPerRow = Number(((treesPerRow*q)/1000).toFixed(2)); 


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginBottom: "32px" }}>Results</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#2196f3" }}>Two rows</h3>
        <div style={style}>
          <StatPreview label="Number of Subs" value={`${nOfSubs} sub`} SelectedIcon={GrassIcon}/>
          <StatPreview label="Number of Trees" value={`${nOfTrees} tree`} SelectedIcon={ForestIcon}/>
          <StatPreview label="Q sub Area" value={`${qSubArea} m³/day`} SelectedIcon={WaterDropIcon}/>
          <StatPreview label="Q sub per irrigation hours" value={`${qSubHour} m³/hr`} SelectedIcon={WaterDropIcon}/>
          <StatPreview label="Q pump" value={`${qPump} m³/hr`} SelectedIcon={HeatPumpIcon}/>
          <StatPreview label="Number of working hours" value={`${nOfWorkingHours} hr`} SelectedIcon={QueryBuilderIcon}/>
          <StatPreview label="Trees per row" value={`${treesPerRow} tree`} SelectedIcon={EditRoadIcon}/>
          <StatPreview label="Number of lines per sub" value={`${nOfLinesPerSub} line`} SelectedIcon={DensitySmallIcon}/>
          <StatPreview label="Q per row" value={`${qPerRow} m³/hr`} SelectedIcon={DensitySmallIcon}/>
        </div>
      </div>

      <div>
        <h3 style={{ color: "#2196f3" }}>Three rows</h3>
      </div>
    </div>
  );
}
