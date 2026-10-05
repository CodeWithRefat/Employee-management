import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className='mt-7 p-5 rounded bg-[#1C1C1C]'>
                <form className='flex flex-wrap justify-between items-start w-full'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-lg text-gray-300 mb-0.5'>Task Title</h3>
                            <input className='text-sm py-1 px-2 w-4/5 border-[1px]  rounded outline-none border-gray-400 mb-4' type="text" placeholder='Make a ui design ' />
                        </div>
                        <div>
                            <h3 className='text-lg text-gray-300 mb-0.5'>Date</h3>
                            <input className='text-sm py-1 px-2 w-4/5 border-[1px]  rounded outline-none border-gray-400 mb-4' type="date" />
                        </div>
                        <div>
                            <h3 className='text-lg text-gray-300 mb-0.5'>Asign to</h3>
                            <input className='text-sm py-1 px-2 w-4/5 border-[1px]  rounded outline-none border-gray-400 mb-4' type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3 className='text-lg text-gray-300 mb-0.5'>Cetegory</h3>
                            <input className='text-sm py-1 px-2 w-4/5 border-[1px]  rounded outline-none border-gray-400 mb-4' type="text" placeholder='Design, dev etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-lg text-gray-300 mb-0.5'>Description</h3>
                        <textarea className='w-full h-44 text-sm py-2 px-4 outline-none border-[1px] border-gray-400'></textarea>
                        <button className='bg-emerald-500 active:scale-97 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default CreateTask
