import { useGLTF } from "@react-three/drei";

const Gltf = () => {
  const gltf = useGLTF("/shiba/scene.gltf");
  return <primitive object={gltf.scene} />;
};

useGLTF.preload("/shiba/scene.gltf");

export default Gltf;
