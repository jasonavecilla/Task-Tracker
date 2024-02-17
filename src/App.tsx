import "./App.css";

import { Category } from "./components/Interfaces";
import TableHeader from "./components/TableHeader";
import RowHeader from "./components/RowHeader";

import initialTasks from "./assets/initial-tasks.json"
import Button from '@mui/material/Button';

const Save = () => alert('clicked');

function App() {
  const  categories: Category[] = [];
  initialTasks.map((category: Category, i) => categories[i] = category);


  return (
    <>
      <div className='align-left'>
        <Button variant="contained" onClick={Save}>Save</Button>
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
        <RowHeader categories={categories}/>
      </table>
    </>
  );
}

export default App;
