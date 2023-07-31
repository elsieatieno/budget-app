import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppProvider } from './AppContext'

const ExpenseItem = ({id, name, cost}) => {
  const {dispatch} = useContext(AppProvider)

  const handleDelete = () =>{
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    })
  }
  return (
    <div>
      <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <span className='badge badge-primary badge-pill mr-3'>{cost}</span>
        <TiDelete size='1.5em' onClick={handleDelete }></TiDelete>
      </li>
    </div>
  )
}

export default ExpenseItem