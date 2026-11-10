import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 rounded-2xl p-5 bg-red-400 '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h1 className='text-2xl font-bold mt-5'>{data.taskTitle}</h1>
        <p  className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 px-2 rounded-lg py-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 px-2 rounded-lg py-2 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
