export default function StatItem({ SelectedIcon, label, value }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", color: "#2196f3" }}>
      <p style={{ marginBottom: 0 }}>{label}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SelectedIcon style={{ color: "#2196f3", marginRight: "12px" }} />
        <p style={{ fontWeight: 800, fontSize: "32px", color: "black" }}>
          {value}
        </p>
      </div>
    </div>
  );
}
