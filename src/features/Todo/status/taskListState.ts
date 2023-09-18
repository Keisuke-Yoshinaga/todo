import { atom, selector } from 'recoil';
import { Task } from '../types/Task';

export const taskListState = atom<Array<Task>>({
  key: 'taskListState',
  default: [],
});

export const taskListStatsState = selector({
  key: 'taskListStatsState',
  get: ({ get }) => {
    const taskList: Array<Task> = get(taskListState);
    const taskListLength: number = taskList?.length || 0;
    const checkedTaskListLength: number = taskList.filter(
      (task) => task.checked,
    ).length;
    const uncheckedTaskListLength: number =
      taskListLength - checkedTaskListLength;

    return {
      taskListLength,
      checkedTaskListLength,
      uncheckedTaskListLength,
    };
  },
});
