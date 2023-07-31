import React, {useContext} from 'react'
import { AppContext } from './AppContext'

const Spent = () => {
  const{expenses} = useContext(AppContext)

  const total = expenses.reduce((total, item)=>{
    return total = total + item.cost
  }, 0)
  
  return (
    <div className='alert alert-primary'>
      <span>Spent so far: Ksh. {total}</span>
    </div>
  )
}

export default Spent