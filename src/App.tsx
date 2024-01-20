import { useState } from "react";
import "./App.css";
import initialData from "./assets/tasks-example.json";

function App() {
  const [tasks, setTasks] = useState(initialData);

  console.log(tasks);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-red-500">
          V47-Tier2-Team-19
        </h1>
      </div>
    </>
  );
}

export default App;
