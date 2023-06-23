"use client";

import Area from "@/components/Area";
import Crop from "@/components/Crop";
import { Divider } from "@mui/material";

export default function Planning() {
  return (
    <main>
      <Crop />
      <Divider />    
      <Area />
    </main>
  );
}
