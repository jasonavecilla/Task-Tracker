import { Activity } from "../Interfaces"
import { useCurrentMonth } from "../hooks/useCurrentMonth";

interface TableActivityProps {
  activity: Activity
}

const daysDictionary: {[key: string]: string} = {
  M: "monday",
  T: "tuesday",
  W: "wednesday",
  Th: "thursday",
  F: "friday",
  Sa: "saturday",
  S: "sunday"
}

const TableActivity = ({activity}: TableActivityProps) => {
  const {weekDays} = useCurrentMonth();

  const tasks = activity.tasks.map((task, i) => (
    <tr key={i}>
      <td className="border-2">{task.taskName}</td>
      {weekDays.map((day, j) => {
        const show = task.days.includes(daysDictionary[day]) || task.days.includes((j + 1).toString());
        return (<td key={j} className="px-2 text-center border-2">
          {show && 
            <input type="checkbox" name={task.taskName} id={task.taskName + j} />
          }
        </td>)
      })}
    </tr>
  ));

  return (<>
    <tr className="bg-blue-200 border-2">
      <td colSpan={weekDays.length + 1} >{activity.activityName}</td>
    </tr>
    {tasks}
  </>)
};

export default TableActivity;