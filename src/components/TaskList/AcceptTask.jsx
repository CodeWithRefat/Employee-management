import React from 'react'

const AcceptTask = () => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 rounded-2xl p-5 bg-red-400 '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2027</h4>
        </div>
        <h1 className='text-2xl font-bold mt-5'>Make a Youturb video</h1>
        <p  className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique vel iure nobis reprehenderit ipsa incidunt commodi reiciendis consequatur omnis?</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 px-2 rounded-lg py-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 px-2 rounded-lg py-2 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
