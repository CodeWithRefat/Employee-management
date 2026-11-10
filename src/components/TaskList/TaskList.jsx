import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='task' className='w-full h-[55%] flex overflow-auto justify-start items-center flex-nowrap  py-5 gap-5 mt-10'>

      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask/>
        }
        if(elem.newTask){
          return <NewTask/>
        }
        if(elem.completed){
          return <CompleteTask/>
        }
        if(elem.failled){
          return <FailedTask/>
        }

      })}

    </div>
  )
}

export default TaskList
