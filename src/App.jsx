import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'
import { Robot } from './Components/Models/Robot'
import { DoubleSide } from 'three'
import { useState } from 'react'

export default function App() {
  const [directions, setDirections] = useState([
    'left',
    'right',
    'up',
    'down',
    'left',
    'right',
    'up',
    'down'
  ])

  return (
    <>
      <button style={{ marginLeft: '100px' }}>Move forward</button>
      <button>Move backword</button>
      <button>Turn right</button>
      <button>Turn left</button>
      <Canvas camera={{ position: [0, 3, 4] }}>
        <ambientLight />
        <spotLight
          intensity={0.9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Robot directions={directions} />
        <OrbitControls />
        <gridHelper args={[5, 5, 'red', 'red', 'red']} />
        <mesh
          position={[0, -0.01, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[5, 5, 1]}>
          <planeBufferGeometry />
          <meshBasicMaterial color="orange" side={DoubleSide} />
        </mesh>
        <Stats />
      </Canvas>
    </>
  )
}
