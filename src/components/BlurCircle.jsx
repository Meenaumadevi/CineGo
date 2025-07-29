import React from 'react'

const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div
      className='absolute -z-50 w-[250px] h-[250px] rounded-full bg-blue-500/30 blur-[100px]'
      style={{ top, left, right, bottom }}
    />
  )
}

export default BlurCircle
