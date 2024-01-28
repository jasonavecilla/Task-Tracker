
export interface ICategory {
    categoryName: string;
    activityTypes: IActivity [];
  }
  
export interface IActivity {
    activityName: string;
    Tasks: ITask [];
  }
  
export interface ITask {
    taskName: string;
    taskDescription: string;
    days: string [];
  }