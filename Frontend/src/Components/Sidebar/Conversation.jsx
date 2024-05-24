import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation, lastIdx}) => {
  const{selectedConversation, setSelectedConversation}=useConversation()
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div className={'flex gap-2 items-center rounded p-2 py-1 cursor-pointer bg-gradient-to-r from-green-500 to-blue-800 hover:from-pink-500 hover:to-yellow-500 ... 
      ${isSelected ? "bg-sky-500" : ""} 
      '}
      onClick = {() => setSelectedConversation(conversation)}
      >

      <div className='avatar online'>
        <div className="w-12 rounded">
            <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-semibold text-gray-200'>{conversation.fullName}</p>
            <span className='text-x1'>🤓</span>
        </div>
      </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'/>  }
    </>
  )
}

export default Conversation
