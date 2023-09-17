import React from 'react';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Todo: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todo型の定義
  type Todo = {
    inputValue: string;
    id: string;
    checked: boolean;
  };

  // 入力値を取得
  const handleChange = (value: string) => {
    setInputValue(value);
  };

  // フォームを送信した時の処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 新しいtodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: uuidv4(),
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  // 編集時の処理
  const handleEdit = (id: string, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // チェックボックスの処理
  const handleChecked = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // 削除ボタンの処理
  const handleDelete = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2">
      <h1 className="-mt-32 text-4xl font-bold text-gray-700">Todoリスト</h1>
      <div className="mt-5 w-full max-w-xl">
        <div className="w-full rounded-lg bg-white px-8 py-6 shadow-md">
          <form className="mb-4 space-y-3" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="w-full rounded-lg border px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
              onChange={(e) => handleChange(e.currentTarget.value)}
              value={inputValue}
            />
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white">
              Add Task
            </button>
          </form>
          <ul className="space-y-3">
            {todos.map((todo) => (
              <div
                className="flex rounded border-l-4 border-blue-500 bg-white p-4 shadow"
                key={todo.id}
              >
                <input
                  type="checkbox"
                  className=""
                  onChange={() => handleChecked(todo.id)}
                />
                {(() => {
                  if (todo.checked) {
                    return (
                      <del className="mx-4 px-2 py-1">{todo.inputValue}</del>
                    );
                  } else {
                    return (
                      <input
                        type="text"
                        className="mx-4 w-full rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
                        onChange={(e) =>
                          handleEdit(todo.id, e.currentTarget.value)
                        }
                        value={todo.inputValue}
                        disabled={todo.checked}
                      />
                    );
                  }
                })()}
                <button
                  className="ml-auto whitespace-nowrap text-red-500"
                  onClick={() => handleDelete(todo.id)}
                >
                  削除
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Todo;
