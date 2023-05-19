import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'
function Camerarig({children}) {
    const group =useRef()
    const snap=useSnapshot(state);
    useFrame((state,delta)=>{
        const isbreakpoint=window.innerWidth<=1260;
        const ismobile=window.innerWidth<=600;

    //set the initial position of the model
    let targetPosition=[-0.4,0,2];
    if(snap.intro){
      if(isbreakpoint) targetPosition=[0,0,2];
      if(ismobile) targetPosition=[0,0.2,2.5];
      else{
        if(ismobile) 
        targetPosition=[0,0,2.5];
        else
        targetPosition=[0,0,2];

      }
    }

    //set the position
    easing.damp3(state.camera.position,targetPosition,0.25,delta);


    easing.dampE(
        group.current.rotation,
        [state.pointer.y/10,-state.pointer.x/5,0,0.25,delta]
    )
    })

  return (
    <group ref={group}>{children}</group>
    
  )
}

export default Camerarig