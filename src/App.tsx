import "./App.css";
import TableHeader from "./components/TableHeader";

function App() {
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
        </tbody>
      </table>
    </>
  );
}

export default App;
