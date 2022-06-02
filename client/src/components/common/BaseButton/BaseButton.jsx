import React from 'react'

const BaseButton = ({text, onClick, baseColor, textColor}) => {
  return (
    <div onClick={onClick} className={`bg-${baseColor}-500 hover:bg-${baseColor}-300 rounded-full px-8 py-2 text-${textColor} w-full text-center h-max hover:cursor-pointer`}>
      {text}
    </div>
  )
}

BaseButton.defaultProps = {
  text: 'Button',
  onClick: () => {
    console.log('button')
  },
  baseColor: 'accent',
  textColor: 'black'
}

export default BaseButton