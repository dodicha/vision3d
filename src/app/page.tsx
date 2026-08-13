"use client";

import { Canvas } from "@react-three/fiber";
import World from "./components/World";

export default function Home() {
  return (
    <Canvas
      shadows
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <World />
    </Canvas>
  );
}
