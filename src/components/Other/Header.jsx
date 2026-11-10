import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = () =>{
    localStorage.setItem("loggedInUser", '')
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> Name👋</span></h1>
      <button
        className='bg-red-600 text-lg font-semibold px-4 border-none outline-none active:scale-95 rounded-lg py-2'
        onClick={logOutUser}
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
