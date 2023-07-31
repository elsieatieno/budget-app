import { createContext, useReducer } from "react"
const AppReducer = (state, action) => {
  switch(action.type){
    default:
      return state;
  }
}

const initialState = {
  budget: 2000,
  expenses:[
    { id: 1, name: 'shopping', cost: 200 },
    { id: 2, name: 'transport', cost: 250 },
  ],
}

export const AppContext = createContext()

export const AppProvider = (props) =>{
 const [state, dispatch] = useReducer(AppReducer, initialState)
 return(<AppContext.Provider value={{
  budget:state.budget, expenses: state.expenses, dispatch,
 }}>
  {props.children}
 </AppContext.Provider>)
}