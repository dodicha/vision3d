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
      <directionalLight position={[10, 50, 5]} intensity={4} castShadow />
      {/*
  Observation:

  DirectionalLight produces light from a specific direction.
  Different planes of the same object appear differently
  illuminated depending on their orientation relative to the light.

  Changing the light's position changes its direction,
  while changing its intensity changes the overall brightness
  without depending on the object's distance from the light.
*/}
      <mesh position={[1, 2, 0]} castShadow>
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
    </>
  );
}
