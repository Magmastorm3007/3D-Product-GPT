import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import Camerarig from './Camerarig'
function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
    {/* <Camerarig>*/}
        {/*<Backdrop/>*/}
        <Center>
          <Shirt/>
        </Center>
     { /*</Camerarig>*/}
    </Canvas>
  )
}

export default CanvasModel