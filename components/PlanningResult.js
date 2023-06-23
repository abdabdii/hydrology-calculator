export default function PlanningResult({ x, y, q, allowed, area }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginBottom: "32px" }}>Results</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#2196f3" }}>Two rows</h3>
      </div>
      <div>
        <h3 style={{ color: "#2196f3" }}>Three rows</h3>
      </div>
    </div>
  );
}
