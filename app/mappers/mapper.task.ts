import { TaskApiResponse } from "../types/task";

/**
 * Shape required by the table
 * (ONLY table-relevant fields)
 */
export type TaskTableItem = {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};

/**
 * Convert API response → Table row
 */
export const mapTaskToTableItem = (task: TaskApiResponse): TaskTableItem => ({
  id: task.id,
  name: task.user_name,
  email: task.user_email,
  status: task.status,
  balance: task.balance,
});

/**
 * Convert list
 */
export const mapTasksToTableItems = (
  tasks: TaskApiResponse[]
): TaskTableItem[] => tasks.map(mapTaskToTableItem);
