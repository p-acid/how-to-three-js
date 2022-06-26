import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Gltf = () => {
  const mesh = useRef(null);
  const gltf = useGLTF("/shiba/scene.gltf");
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.1));
  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

useGLTF.preload("/shiba/scene.gltf");

export default Gltf;
