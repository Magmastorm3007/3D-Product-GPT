import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
function ColorPicker() {
  const snap=useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
    disableAlpha
    onChange={(color)=>state.color=color.hex}
    presetColors={[
      '#000000','#ff0000','#0000ff','#00ff00',
    ]}
      />
    </div>
  )
}

export default ColorPicker