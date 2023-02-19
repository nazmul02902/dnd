export enum columnType {
    TO_DO = "todo",
    IN_PROGRESS = "in progress",
    BLOCKED = "blocked",
    COMPLETED = "completed",
  }


  export type taskType = {
    id: string;
    title: string;
    column: string;
    color: string;
  };