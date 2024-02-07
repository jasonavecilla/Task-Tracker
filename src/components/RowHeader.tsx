import { Activity, Category } from "./Interfaces";
import TableHeader from "./TableHeader";

interface RowHeaderProps {
  categories: Category [];
}

const taskRows = (activity: Activity) => 
  activity.Tasks.map((task) => (
    <tr className="text-nowrap">
      {task.taskName}
    </tr>));

const activityRows = (category: Category) =>
  category.activityTypes.map((activity) => (
    <tr className="text-nowrap">
      <b>{activity.activityName}</b>
      {taskRows(activity)}
    </tr>));

  const categoryRows = (categories: Category[]) =>
    categories?.map((category) => (
      <tr className="text-nowrap">
        <TableHeader title={category.categoryName} />
        {activityRows(category)};
      </tr>));

const RowHeader = ({ categories }: RowHeaderProps) => {
  return (
    <tbody>
      {categoryRows(categories)}
    </tbody>
  );
};

export default RowHeader;
