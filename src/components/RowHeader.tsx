import "./table.css";
import { useCurrentMonth } from "../hooks/useCurrentMonth";
import { Activity, Category, Task } from "./Interfaces";
import TableHeader from "./TableHeader";

interface RowHeaderProps {
  categories: Category [];
}

const Popup = (name: string, description: string) => alert(`Name: ${name}\nDescription: ${description}`);

const { weekDaysLong } = useCurrentMonth();

const taskRows = (activity: Activity) => 
  activity.Tasks.map((task) => (
    <tr>
      <td className="text-nowrap" role="button" onClick={() => Popup(task.taskName, task.taskDescription)}>{task.taskName}</td>
      {checkboxRow(task)}
    </tr>
    ));

const checkboxRow = (task: Task) => 
  weekDaysLong.map((day) =>
    <>
      {task.days.includes(day.toLowerCase())?
        (<td className='center'>
          <input type="checkbox" />
        </td>):
        <td></td>
      }
      {day === "Sunday" && <td></td>}   
    </>);

const activityRows = (category: Category) =>
  category.activityTypes.map((activity) => (
    <>
      <tr><th className="px-2">{activity.activityName}</th></tr>
      {taskRows(activity)}
    </>));

  const categoryRows = (categories: Category[]) =>
    categories?.map((category) => (
      <>
        <TableHeader title={category.categoryName} />
        {activityRows(category)}
      </>));

const RowHeader = ({ categories }: RowHeaderProps) => {
  return (
    <tbody>
      {categoryRows(categories)}
    </tbody>
  );
};

export default RowHeader;
