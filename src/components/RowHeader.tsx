import { IActivity, ICategory } from "./Interfaces";
import TableHeader from "./TableHeader";

interface RowHeaderProps {
  categories: ICategory [];
}

const taskRows = (activity: IActivity) => 
  activity.Tasks.map((task) => (
    <tbody className="text-nowrap">
      {task.taskName}
    </tbody>));

const activityRows = (category: ICategory) =>
  category.activityTypes.map((activity) => (
    <tbody className="text-nowrap">
      <b>{activity.activityName}</b>
      {taskRows(activity)}
    </tbody>));

  const categoryRows = (categories: ICategory[]) =>
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
