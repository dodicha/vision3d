import Observer from "./Observer";

export default function World() {
  return (
    <>
      <Observer />
      <ambientLight intensity={1} />;
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
