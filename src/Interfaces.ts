interface Category {
  categoryName: string;
  activityTypes: Activity [];
}

interface Activity {
  activityName: string;
  tasks: Task [];
}

interface Task {
  taskName: string;
  taskDescription: string;
  days: string [];
  doneDays?: string [];
}

export type { Category, Activity, Task };
