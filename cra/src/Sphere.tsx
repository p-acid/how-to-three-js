import { useRef } from "react";
import { Mesh } from "three";
import { animated, useSpring, config } from "@react-spring/three";

const Sphere = ({
  isGrow,
  position,
}: {
  isGrow: boolean;
  position: number[];
}) => {
  const meshRef = useRef<Mesh>(null);

  console.log(isGrow);
  console.log(position);

  const props = useSpring({
    scale: isGrow ? [1.5, 1.5, 1.5] : [0.5, 0.5, 0.5],
    position,
    config: config.stiff,
  });

  return (
    <animated.mesh {...props} ref={meshRef}>
      <sphereBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );
};

export default Sphere;
