import React from 'react'

const BaseButton = ({text, onClick, baseColor, textColor}) => {
  return (
    <div onClick={onClick} style={{backgroundColor: baseColor, color: textColor}} className={`hover:bg-${baseColor} rounded-full px-8 py-2 w-full text-center h-max hover:cursor-pointer`}>
      {text}
    </div>
  )
}

BaseButton.defaultProps = {
  text: 'Button',
  onClick: () => {
    console.log('button')
  },
  baseColor: '#FFD803',
  textColor: 'black'
}

export default BaseButton