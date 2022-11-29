import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, Stats } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const AnimatedBox = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    console.log('hi');
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default function Home() {
  return (
    <div className='container'>
      <Canvas>
        <OrthographicCamera />
        <Stats />
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
}
