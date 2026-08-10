import Observer from "./Observer";

export default function World() {
  return (
    <>
      {/* first experiment */}
      <Observer />
      <ambientLight intensity={10} />
      {/*
  Observation:

  Changing the intensity of AmbientLight changes the
  appearance of MeshStandardMaterial.

  MeshBasicMaterial remains unchanged.

  The same object therefore produces different visible
  results depending on the material it has.
*/}
      <mesh position={[-8, 0, 0]}>
        <boxGeometry args={[5, 5, 3]} />
        {/* 
  Observation:
  This is a cube, but from the initial camera position
  it first appears as a square.
  Changing its position changes the visible projection
  and reveals more of its 3D form.
*/}
        <meshBasicMaterial color="red" />
        {/*
  Observation:
  MeshBasicMaterial is not affected by lighting.
  It remains visible and red regardless of the light intensity.
*/}
      </mesh>
      <mesh position={[-20, 0, 0]}>
        <boxGeometry args={[5, 5, 1]} />
        <meshStandardMaterial color="red" />
        {/*
  Observation:
  MeshStandardMaterial is affected by lighting.
  With insufficient light, the object becomes dark.
  Increasing light intensity makes it brighter.
*/}
      </mesh>

      {/*
  Experiment:

  We have created a 3D object, but the observer receives
  a 2D image of it.

  The cube exists in 3D space, yet its different planes
  are not clearly distinguishable.

  Let's see what happens when we introduce a difference
  between these planes.
*/}
      <mesh>
        <boxGeometry args={[5, 5, 3]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
