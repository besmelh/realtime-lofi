import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

export default function Home() {
  return (
    <div className='container'>
      <Canvas>
        <Stats />
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
