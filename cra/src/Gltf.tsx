import { useRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Gltf = () => {
  const mesh = useRef<Mesh>(null);
  const gltf = useGLTF("/shiba/scene.gltf");
  useFrame(() => (mesh.current!.rotation.y += 0.05));
  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

useGLTF.preload("/shiba/scene.gltf");

export default Gltf;
