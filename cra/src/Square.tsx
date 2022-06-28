import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Square = ({ scale }: { scale: number }) => {
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    mesh.current!.rotation.y += 0.02;
    mesh.current!.rotation.z += 0.02;
  });

  return (
    <mesh ref={mesh} position={[1.5, 2, 1.5]}>
      <directionalLight color="blue" position={[5, 5, 5]} intensity={0.2} />
      <ambientLight color="green" position={[5, 5, 5]} intensity={0.2} />
      <boxGeometry args={[scale, scale, scale]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Square;
