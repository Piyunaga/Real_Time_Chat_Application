import React from 'react'

const Conversation = () => {
  return (
    <div>
      <div className="flex gap-2 items-center rounded p-2 py-1 cursor-pointer bg-gradient-to-r from-green-500 to-blue-800 hover:from-pink-500 hover:to-yellow-500 ...">

      <div className='avatar online'>
        <div className="w-12 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-semibold text-gray-200'>Rohit Sharma</p>
            <span className='text-x1'>🤓</span>
        </div>
      </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default Conversation
