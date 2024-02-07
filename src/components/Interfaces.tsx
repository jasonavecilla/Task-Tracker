
interface Category {
  categoryName: string;
  activityTypes: Activity [];
}

interface Activity {
  activityName: string;
  Tasks: Task [];
}

interface Task {
  taskName: string;
  taskDescription: string;
  days: string [];
}

export type { Category, Activity, Task };