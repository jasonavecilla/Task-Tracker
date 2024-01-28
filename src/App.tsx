import "./App.css";
import { ICategory } from "./components/Interfaces";

import TableHeader from "./components/TableHeader";
import RowHeader from "./components/RowHeader";
import { useState } from "react";

function App() {
  const categories = useState(initialData as unknown as ICategory[]) ;

  console.log(categories);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-red-500">
          V47-Tier2-Team-19
        </h1>
      </div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableHeader title="Routine Activities" />
          <RowHeader/>
        </tbody>
      </table>
    </>
  );
}

export default App;
