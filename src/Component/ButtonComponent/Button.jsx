import React from 'react'

function Button({text = 'Order Now'}) {
  return (
    <div className=' bg-gray-300 border-2 border-b-8 border-r-8 border-textColor shadow-textColor shadow-sm rounded-3xl h-16  flex justify-center align-middle'>
      <button className=' font-semibold text-3xl '>{text}</button>
    </div>
  )
}

export default Button
