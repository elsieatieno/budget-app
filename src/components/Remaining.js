import React, {useContext} from 'react'
import { AppContext } from './AppContext'

const Remaining = () => {
  const {expenses, budget} = useContext(AppContext)

  const total = expenses.reduce((total,item) => {
    return total = total + item.cose
  }, 0)

  const alert = total > budget ? 'alert-danger': 'alert-success'

  return (
    <div className={`alert ${alert}`}>
      <span>Remaining: Ksh. {budget - total}</span>
    </div>
  )
}

export default Remaining