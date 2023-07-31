import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget'
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/ExpenseList";
import AddForm from "./components/AddForm";
import { AppProvider } from "./components/AppContext";

function App() {
  return (
  <AppProvider>
   <div className="container">
    <h1 className="mt-3">My Budget Planner</h1>

    <div className="row mt-3">
      <div className="col-sm">
        <Budget />
      </div>
      <div className="col-sm">
        <Remaining />
      </div>
      <div className="col-sm">
        <Spent />
      </div>

       <h3 className="mt-3">Expenses</h3> 
       <div className="row mt-3" >
        <div className="col-sm">
        <ExpenseList />
        </div>
       </div>
    </div>
    <h3 className="mt-3">Add Expenses</h3>
    <div className="row mt-3">
      <div className="col-sm">
        <AddForm />
      </div>
    </div>
   </div>
   </AppProvider>
  );
}

export default App;
