import { type FC, useEffect } from 'react';
import * as THREE from 'three';

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import type { TechCardType } from '../../../types';

interface TechIconProps {
  model: TechCardType;
}

export const TechIcon: FC<TechIconProps> = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === 'Three.js') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }

    if (model.name === 'SASS') {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'back') {
            child.material.color.set('#ff00ff');
          } else {
            child.material.color.set('#ffffff ');
          }
        }
      });
    }

    if (model.name === 'TypeScript') {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'back') {
            child.material.color.set('#00457E');
          } else {
            child.material.color.set('#ffffff ');
          }
        }
      });
    }
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error*/}
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} position={model.position} />
        </group>
      </Float>
    </Canvas>
  );
};
