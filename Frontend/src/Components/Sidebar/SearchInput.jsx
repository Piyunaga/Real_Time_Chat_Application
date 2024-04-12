import React from 'react'

const SearchInput = () => {
  return (
    <div>
      <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-cyan-800 text-white'>
            icon
        </button>
      </form>
    </div>
  )
}

export default SearchInput
