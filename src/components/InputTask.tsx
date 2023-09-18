import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';
import { taskListState } from '../status/taskListState';

const InputTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useRecoilState(taskListState);

  // idの生成
  const getId = () => {
    return uuidv4();
  };

  // taskの追加
  const addTask = () => {
    if (inputValue === '') return;

    // 新しいtaskを作成
    const newTask: Task = {
      id: getId(),
      inputValue: inputValue,
      checked: false,
    };

    setTaskList([newTask, ...taskList]);
    setInputValue('');
  };

  return (
    <div className="mb-4 space-y-3">
      <input
        type="text"
        className="w-full rounded-lg border px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        className="w-full rounded bg-blue-500 px-4 py-2 text-white"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default InputTask;
