import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    console.log(authData.employees)

    return (
        <div id='task' className='mt-4 mb-4 p-4 h- rounded bg-[#1C1C1C]'>

            <div className='bg-emerald-500 font-bold text-lg mb-2 flex justify-between rounded py-2 px-4'>
                <h2 className='w-1/5 '>Employess</h2>
                <h3 className='w-1/5 '>New Task</h3>
                <h5 className='w-1/5 '>Active Task</h5>
                <h5 className='w-1/5 '>Completed</h5>
                <h5 className='w-1/5 '>Failed</h5>
            </div>

            <div id='task' className=' '>
                {authData.employees.map(function (elem, idx) {
                    return <div key={idx} className='border-1 font-medium text-lg border-gray-200-400 mb-2 flex justify-between rounded py-2 px-4'>
                        <h2 className='w-1/5'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-500'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-green-500'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-red-500'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask
