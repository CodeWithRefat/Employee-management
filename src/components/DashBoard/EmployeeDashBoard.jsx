import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = (props) => {
  return (
    <div className='h-screen p-10 bg-[#1C1C1C]'>
        
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashBoard
