import "./App.css";

import initialTasks from "./assets/initial-tasks.json"
import { useState } from "react";
import TableHeader from "./components/TableHeader";
import Table from "./components/Table";
import { Activity, Category } from "./Interfaces";

function App() {
  const [tasks, setTasks] = useState<Category[]>(initialTasks);

  const handleCheck = (newActivity: Activity, catIndex: string, actIndex: string) => {
    setTasks(tasks.map((category, i) => {
      if (i !== +catIndex) return category;
      return {
        ...category,
        activityTypes: category.activityTypes.map((activity, j) => {
          if (j !== +actIndex) return activity;
          return newActivity;
        })
      };
    }));
  };

  return (
    <>
      <div className='align-left'>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >Save</button>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-red-500">
          V47-Tier2-Team-19
        </h1>
      </div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <Table categories={tasks} handleCheck={handleCheck} />
        </tbody>
      </table>
    </>
  );
}

export default App;
