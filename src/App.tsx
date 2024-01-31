import "./App.css";
import TableHeader from "./components/TableHeader";
import Button from '@mui/material/Button';

const Save = () => alert('clicked');

function App() {
  return (
    <>
      <div className='align-left'>
        <Button variant="contained" onClick={Save}>Save</Button>
      </div>
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
        </tbody>
      </table>
    </>
  );
}

export default App;
