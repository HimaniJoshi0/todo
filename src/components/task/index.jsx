import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from  'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { removeTodo} from '../../slice/reduce';

const Task = ({setTask, setCheck, updateTask}) => {

   
  const dispatch = useDispatch();

  const store_data = useSelector((state)=>{
    return state.list_data
     });

     const removeTask=(index)=>{
      dispatch(removeTodo(index))
     }

    const updateTask_list=(item,index)=>{
      console.log("updating")
      setTask(item)
    } 
   

     const display_list=(item,index)=>{
           return(
            <div key={index} className='flex w-4/5 justify-around items-center'>
            <div className='bg-white w-4/5 my-2 p-2 rounded-md'>{item}</div>
            <FontAwesomeIcon icon={faTrash}  onClick={()=>removeTask(index)} className='transition ease-in-out hover:scale-125 text-red-90'/>
            <FontAwesomeIcon icon={faPenToSquare}  onClick={()=>updateTask_list(item,index)} className='transition ease-in-out hover:scale-125 text-grey-90'/>
            </div>
           )
     }
     


  return (
    <div className='w-4/5 flex flex-col justify-center items-center'>
      <div><h1 className='text-xl font-bold'>Your List</h1></div>
      {store_data.map(display_list)}
    </div>
  )
}

export default Task