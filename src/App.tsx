import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Top from './routes/Top.tsx';
import Todo from './routes/Todo.tsx';

const App: FC = () => {
  return (
    <div>
      <Routes>
        {/* path URL */}
        <Route path="/" element={<Top />} />
        <Route path="/todo" element={<Todo />} />

        {/* 上記のパスに当てはまらない場合 */}
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
