import "./App.css";

import TableHeader from "./components/TableHeader";
import Table from "./components/Table";
import { Activity } from "./Interfaces";
import useTasks from "./hooks/useTasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useTasks();
  const [showSaveText, setShowSaveText] = useState(false);

  const handleCheck = (newActivity: Activity, catIndex: string, actIndex: string) => {
    if (!tasks || !setTasks) return;
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

  const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setShowSaveText(true);
  };

  useEffect(() => {
    if (showSaveText) setTimeout(() => setShowSaveText(false), 3000);
  }, [showSaveText]);

  return (
    <>
      <div className='flex items-center mb-2'>
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          onClick={saveTasksToLocalStorage}>Save</button>
        {showSaveText && 
          <span>Changes saved!</span>
        }
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
          {tasks && 
            <Table categories={tasks} handleCheck={handleCheck} />
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
