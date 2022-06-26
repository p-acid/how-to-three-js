import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { lazy } from "react";
import { Suspense } from "react";
import Gltf from "./Gltf";

const ModelComponent = lazy(() => import("./Gltf"));

function CoinMesh() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.1));
  return (
    <mesh ref={mesh} scale={3}>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}

export default function Meshes() {
  return (
    <Suspense fallback={"lopading"}>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <Gltf />
        <color attach="background" args={["green"]} />
      </Canvas>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <CoinMesh />
        <color attach="background" args={["gray"]} />
      </Canvas>
    </Suspense>
  );
}
