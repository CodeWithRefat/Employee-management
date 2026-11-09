import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = ({data}) => {
  return (
    <div className='h-screen p-10 bg-[#1C1C1C]'>
        
        <Header data={data} />
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashBoard
