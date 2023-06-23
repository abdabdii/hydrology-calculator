export default function StatPreview({ SelectedIcon, label, value }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{fontWeight: "bold", marginBottom: "5px"}}>{label}</div>
            <p style={{ fontWeight: 800, fontSize: "32px", marginTop: "0" }}>
                <SelectedIcon
                    style={{ color: "#2196f3", marginRight: "12px" }}
                />
                {value}
            </p>
        </div>
    );
}