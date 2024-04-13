import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <div>
      <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-gradient-to-r from-green-500 to-blue-800 hover:from-pink-500 hover:to-yellow-500 ... text-white'>
        <IoSearchSharp className='w-5 h-5 outline-none' />
        </button>
      </form>
    </div>
  )
}

export default SearchInput
