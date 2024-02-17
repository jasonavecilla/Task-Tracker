import { Category} from "../Interfaces";
import TableActivity from "./TableActivity";
import TableHeader from "./TableHeader";

interface TableProps {
  categories: Category[]
}

const Table = ({categories}: TableProps) => {
  const categoryRows = categories.map(category => (
    <TableHeader key={category.categoryName} title={category.categoryName}>
      {
        category.activityTypes.map((activity, i) => (
          <TableActivity key={i} activity={activity} />
        ))
      }
    </TableHeader>    
    ));

  return (
    categoryRows
  )
};

export default Table;