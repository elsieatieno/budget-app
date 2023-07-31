import React, { useState,useContext } from 'react'
import { AppContext } from './AppContext'
import {v4 as uuidv4} from 'uuid';

const AddForm = () => {
  const{dispatch} =useContext(AppContext)
  const [name, setName]= useState('')
  const [cost, setCost] = useState('')
  const onsubmit = (event)=>{
    event.preventDefault()

    const expense = {
      id: uuidv4(),
      name:name,
      cost: parseInt(cost)
    }
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
  }
  
  return (
    <div>
      <form onSubmit={onsubmit}>
        <div className='row'>
          <div className='col-sm'>
            <label for='name'>Name</label>
            <input required='required' type='text' className='form-control' id='name' value={name}
            onChange={(event)=>{setName(event.target.value)}}/>
          </div>
          <div className='col-sm'>
            <label for='name'>Cost</label>
            <input required='required' type='text' className='form-control' id='cost' value={cost}
            onChange={(event)=>{setCost(event.target.value)}}/>
          </div>
          <div className='col-sm'>
            <button type='submit' className='btn btn-primary' > Save </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddForm