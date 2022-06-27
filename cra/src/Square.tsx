import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Square = ({ scale }: { scale: number }) => {
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    mesh.current!.rotation.y += 0.02;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[scale, scale, scale]} />
    </mesh>
  );
};

export default Square;
