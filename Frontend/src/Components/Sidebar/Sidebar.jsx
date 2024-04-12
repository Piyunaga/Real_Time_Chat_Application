import React from 'react'
import SearchInput from './SearchInput'
const Sidebar = () => {
  return (
    <div>
      <SearchInput/>
      <div className='divider px-3 text-white'></div>
      {/* <Conversations/> */}
      {/* <LogoutBoutton/> */}
    </div>
  )
}

export default Sidebar
