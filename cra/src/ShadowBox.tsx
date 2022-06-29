import { Box, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const ShadowBox = () => {
  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    boxRef.current!.rotation.y += 0.004;
    boxRef.current!.rotation.x += 0.004;
    boxRef.current!.rotation.z += 0.004;
  });

  return (
    <group>
      <Box castShadow receiveShadow ref={boxRef} position={[0, 0.5, 0]}>
        <meshStandardMaterial attach="material" color="white" />
      </Box>
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[1000, 1000]}
      >
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </group>
  );
};

export default ShadowBox;
