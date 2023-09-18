import { useRecoilState } from 'recoil';
import { taskListState } from '../status/taskListState';
import { Task } from '../types/Task';
import ShowTaskListStats from './ShowTaskListStats';

const showTaskList = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);

  // 編集時の処理
  const handleEdit = (id: string, inputValue: string) => {
    // Stateは直接変更できないので、新しい配列を作成して上書きする
    const newTaskList = taskList.map((task: Task) => ({
      ...task,
      inputValue: task.id === id ? inputValue : task.inputValue,
    }));
    setTaskList(newTaskList);
  };

  // チェックボックスの処理
  const handleChecked = (id: string) => {
    // Stateは直接変更できないので、新しい配列を作成して上書きする
    const newTaskList = taskList.map((task: Task) => ({
      ...task,
      checked: task.id === id ? !task.checked : task.checked,
    }));
    setTaskList(newTaskList);
  };

  // 削除ボタンの処理
  const handleDelete = (id: string) => {
    const newTaskList = taskList.filter((task: Task) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <div>
      <ShowTaskListStats />
      <ul className="space-y-3">
        {taskList.map((task) => (
          <li
            className={`mt-4 flex w-full rounded-lg border-l-8 ${
              task.checked ? `border-green-500` : `border-blue-500`
            } bg-white px-8 py-3 shadow-md`}
            key={task.id}
          >
            <input
              type="checkbox"
              className=""
              onChange={() => handleChecked(task.id)}
            />
            {(() => {
              if (task.checked) {
                return (
                  <div className="mx-4 px-2 py-1 line-through">
                    {task.inputValue}
                  </div>
                );
              } else {
                return (
                  <input
                    type="text"
                    className="mx-4 w-full rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onChange={(e) => handleEdit(task.id, e.target.value)}
                    value={task.inputValue}
                    disabled={task.checked}
                  />
                );
              }
            })()}
            <button
              className="ml-auto whitespace-nowrap text-red-500"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default showTaskList;
