import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log({ isRotating });
    if (isRotating && actions['Take 001']) {
      actions['Take 001'].play();
    } else if (actions['Take 001']) {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
    </group>
  );
};

export default Plane;
