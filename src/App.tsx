import "./App.css";

// import { useState } from "react";

import { ICategory } from "./components/Interfaces";
import TableHeader from "./components/TableHeader";
import RowHeader from "./components/RowHeader";

import initialTasks from "./assets/initial-tasks.json"

function App() {
  const  categories: ICategory[] = [];
  initialTasks.map((category: ICategory, i) => categories[i] = category);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-red-500">
          V47-Tier2-Team-19
        </h1>
      </div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <RowHeader categories={categories}/>
      </table>
    </>
  );
}

export default App;
