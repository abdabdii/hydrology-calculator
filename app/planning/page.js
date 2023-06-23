"use client";

import Area from "@/components/Area";
import Crop from "@/components/Crop";
import OneBlock from "@/components/OneBlock";
import PlanningResult from "@/components/PlanningResult";
import { Divider } from "@mui/material";
import { useState } from "react";

export default function Planning() {
  const [inputValue, setInputValue] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [allowed, setAllowed] = useState(20);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [q, setQ] = useState("");
  return (
    <main>
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
      />
      <Divider />
      {x && y && allowed && width && height && q && (
        <PlanningResult
          x={x}
          y={y}
          q={q}
          allowed={allowed}
          area={Math.round((width * height) / 4200)}
        />
      )}
    </main>
  );
}
