import { useEffect, useState } from "react";
import initialTasks from "../assets/initial-tasks.json"
import { Category } from "../Interfaces";

const useTasks = () : [Category[] | null, React.Dispatch<React.SetStateAction<Category[]>> | null] => {
  const [tasks, setTasks] = useState<Category[] | null>(null);

  useEffect(() => {
    const localTasks = localStorage.getItem("tasks");
    const parsedTasks: Category[] = localTasks ? JSON.parse(localTasks): null;
    if (parsedTasks) {
      setTasks(parsedTasks)
    } else {
      setTasks(initialTasks)
    }
  }, []);

  return [tasks, setTasks];
}

export default useTasks;