import { Activity, Category} from "../Interfaces";
import TableActivity from "./TableActivity";
import TableHeader from "./TableHeader";

interface TableProps {
  categories: Category[];
  handleCheck: (newActivity: Activity, catIndex: string, actIndex: string) => void;
}

const Table = ({categories, handleCheck}: TableProps) => {
  const categoryRows = categories.map((category, i) => (
    <TableHeader key={i} title={category.categoryName}>
      {
        category.activityTypes.map((activity, j) => (
          <TableActivity key={j} initialActivity={activity} handleCheck={handleCheck} catIndex={i} actIndex={j} />
        ))
      }
    </TableHeader>    
    ));

  return (
    categoryRows
  )
};

export default Table;
