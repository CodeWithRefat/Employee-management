import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 rounded-2xl p-5 bg-green-400 '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h1 className='text-2xl font-bold mt-5'>{data.taskTitle}</h1>
        <p  className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-2'>
            <button className='w-full bg-green-500 px-2 rounded-lg py-2 text-sm'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
