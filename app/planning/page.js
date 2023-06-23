"use client";

import Area from "@/components/Area";
import Crop from "@/components/Crop";
import OneBlock from "@/components/OneBlock";
import PlanningResult from "@/components/PlanningResult";
import { Divider } from "@mui/material";
import { useState } from "react";

export default function Planning() {
  const [inputValue, setInputValue] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [allowed, setAllowed] = useState(0);
  const [v, setV] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [q, setQ] = useState(0);
  const [hrs, setHrs] = useState(3);
  const [rows, setRows] = useState(2);
  const [irrg, setIrrg] = useState(2);
  return (
    <main style={{ overflowX: "hidden" }}>
      <Crop
        inputValue={inputValue}
        setInputValue={setInputValue}
        x={x}
        setX={setX}
        y={y}
        setY={setY}
        q={q}
        setQ={setQ}
      />
      <Divider />
      <Area
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        allowed={allowed}
        setAllowed={setAllowed}
        v={v}
        setV={setV}
        hrs={hrs}
        setHrs={setHrs}
        rows={rows}
        setRows={setRows}
        irrg={irrg}
        setIrrg={setIrrg}
      />
      <Divider />
      {x && y && allowed && width && height && q ? (
        <PlanningResult
          width={width}
          height={height}
          x={x}
          y={y}
          v={v}
          q={q}
          allowed={allowed}
          area={Math.round((width * height) / 4200)}
          hrs={hrs}
          rows={rows}
          irr={irrg}
        />
      ) : (
        ""
      )}
    </main>
  );
}
