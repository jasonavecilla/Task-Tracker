import { useEffect, useState } from "react";
import initialTasks from "../assets/initial-tasks.json"
import { Category } from "../Interfaces";

const useTasks = () : [Category[], React.Dispatch<React.SetStateAction<Category[]>>] => {
  const [tasks, setTasks] = useState<Category[]>([]);

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
