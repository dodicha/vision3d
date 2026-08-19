import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Edges } from "@react-three/drei";
import { EdgesGeometry, LineBasicMaterial } from "three";

function TestCube() {
  const meshRef1 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    meshRef1.current!.rotation.x = t;
    meshRef1.current!.rotation.y = Math.cos(t);
    meshRef1.current!.rotation.z = Math.sin(t);
  });
  return (
    <mesh ref={meshRef1} position={[0, 0, 0]} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="blue" />
      <Edges color="red" />
    </mesh>
  );
}

export default function World() {
  {
    /*
  Experiment:

  We have created 3D objects, but the observer receives
  a 2D image of them.

  We want to explore whether making the different planes
  of a 3D object visually distinguishable can make its
  spatial form more perceptible.
*/
  }
  return (
    <>
      <directionalLight position={[5, 15, 15]} intensity={4} castShadow />

      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <TestCube />
    </>
  );
}
