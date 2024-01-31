import { Activity, Category } from "./Interfaces";
import TableHeader from "./TableHeader";

interface RowHeaderProps {
  categories: Category [];
}

const taskRows = (activity: Activity) => 
  activity.Tasks.map((task) => (
    <tbody className="text-nowrap">
      {task.taskName}
    </tbody>));

const activityRows = (category: Category) =>
  category.activityTypes.map((activity) => (
    <tbody className="text-nowrap">
      <b>{activity.activityName}</b>
      {taskRows(activity)}
    </tbody>));

  const categoryRows = (categories: Category[]) =>
    categories?.map((category) => (
      <tbody className="text-nowrap">
        <TableHeader title={category.categoryName} />
        {activityRows(category)};
      </tbody>));

const RowHeader = ({ categories }: RowHeaderProps) => {
  return (
    <>
      {categoryRows(categories)}
    </>
  );
};

export default RowHeader;
