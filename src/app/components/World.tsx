import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
function Test1() {
  useFrame(() => {
    console.log("frame");
  });

  return null;
}
// console.log Works non-stop
function Test2() {
  useFrame((state, delta) => {
    console.log("delta:", delta);
  });
}
// delta is the time in seconds since the last frame. It is useful for creating smooth animations that are independent of the frame rate.
function Test3() {
  useFrame((state) => {
    console.log("state:", state);
  });
  return null;
}

function TestCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  {
    /*
  Observation:

  useRef gives us a reference to the specific Mesh
  we want to control.
*/
  }
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    meshRef.current!.position.x = Math.sin(t);
    meshRef.current!.position.y = Math.sin(t);
    meshRef.current!.position.z = Math.sin(t);
    meshRef.current!.rotation.x = t;
    meshRef.current!.rotation.y = Math.cos(t);
    meshRef.current!.rotation.z = Math.sin(t);
  });
  {
    /*
  Observation:

  useFrame runs on every rendered frame.
  We can use the current time to change the object's state
  from one frame to the next.
*/
  }
  return (
    <>
      <mesh ref={meshRef} position={[1, 1, 0]} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
function TestCube1() {
  const meshRef1 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    meshRef1.current!.rotation.x = t;
    meshRef1.current!.rotation.y = Math.cos(t);
    meshRef1.current!.rotation.z = Math.sin(t);
  });
  return (
    <mesh ref={meshRef1} position={[5, 1, 0]} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

// state contains information about the current frame, including the camera, scene, and renderer. It can be used to access and manipulate the 3D scene in real-time.
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
      {/*
  Observation:

  DirectionalLight produces light from a specific direction.
  Different planes of the same object appear differently
  illuminated depending on their orientation relative to the light.

  Changing the light's position changes its direction,
  while changing its intensity changes the overall brightness
  without depending on the object's distance from the light.
*/}
      <mesh position={[-5, 0, 0]} castShadow rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-2, 0, 0]} castShadow rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        {/*
  Observation:

  PlaneGeometry creates a flat surface.

  We introduced it as a surface around the object
  so that the shadow cast by the object could be observed.
*/}
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* <Test1 /> */}
      {/* <Test2 /> */}
      {/* <Test3 /> */}
      <TestCube />
      <TestCube1 />
    </>
  );
}
