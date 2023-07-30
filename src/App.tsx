import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
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
    <>
      <div>
        <h2>Todoリスト</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChange(e.currentTarget.value)}
            value={inputValue}
          />
          <input type="submit" value="追加" />
        </form>
        <ul>
          {todos.map((todo) => (
            <div key={todo.id}>
              <input type="checkbox" onChange={() => handleChecked(todo.id)} />
              {(() => {
                if (todo.checked) {
                  return <del>{todo.inputValue}</del>;
                } else {
                  return (
                    <input
                      type="text"
                      onChange={(e) =>
                        handleEdit(todo.id, e.currentTarget.value)
                      }
                      value={todo.inputValue}
                      disabled={todo.checked}
                    />
                  );
                }
              })()}
              <button onClick={() => handleDelete(todo.id)}>削除</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
