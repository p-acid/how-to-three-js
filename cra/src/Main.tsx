import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Gltf from "./Gltf";
import Square from "./Square";

function CoinMesh() {
  return (
    <mesh scale={3}>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}

export default function Main() {
  const [scale, setScale] = useState(0);

  return (
    <>
      <Suspense fallback="loading">
        <Canvas camera={{ position: [1, 1, 1] }}>
          <Gltf />
          <color attach="background" args={["green"]} />
        </Canvas>
        <Canvas camera={{ position: [5, 5, 5] }}>
          <CoinMesh />
          <color attach="background" args={["gray"]} />
        </Canvas>
        <Canvas camera={{ position: [10, 10, 10] }}>
          <Square scale={scale} />
          <color attach="background" args={["lightblue"]} />
        </Canvas>
      </Suspense>
      <input
        type="range"
        onChange={(e) => setScale(Number(e.target.value) / 10)}
      ></input>
    </>
  );
}
