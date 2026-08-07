"use client";

import { Canvas } from "@react-three/fiber";
import World from "./components/World";

export default function Home() {
  return (
    <Canvas>
      <World />
    </Canvas>
  );
}
