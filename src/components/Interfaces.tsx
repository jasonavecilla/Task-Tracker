
export interface Category {
  categoryName: string;
  activityTypes: Activity [];
}

export interface Activity {
  activityName: string;
  Tasks: Task [];
}

export interface Task {
  taskName: string;
  taskDescription: string;
  days: string [];
}