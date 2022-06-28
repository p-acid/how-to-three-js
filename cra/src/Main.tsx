import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Gltf from "./Gltf";
import Square from "./Square";
import Sphere from "./Sphere";

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
  const [isGrow, setIsGrow] = useState(false);
  const [position, setPosition] = useState([0, 0, 0]);

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
        <Canvas camera={{ position: [3, 3, 3] }} style={{ height: "15rem" }}>
          <Square scale={scale} />
          <color attach="background" args={["lightblue"]} />
          <gridHelper />
        </Canvas>
        <input
          type="range"
          defaultValue={0}
          onChange={(e) => setScale(Number(e.target.value) / 10)}
        />
        <Canvas camera={{ position: [5, 5, 5] }} style={{ height: "15rem" }}>
          <Sphere isGrow={isGrow} position={position} />
          <color attach="background" args={["#c28989"]} />
          <gridHelper />
        </Canvas>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setIsGrow((prev) => !prev)}
          >{`${isGrow}`}</button>
          <button onClick={() => setPosition([5, 0, 0])}>to right</button>
          <button onClick={() => setPosition([-5, 0, 0])}>to left</button>
        </div>
      </Suspense>
    </>
  );
}
