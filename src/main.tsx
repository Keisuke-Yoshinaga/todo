import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Todo from './routes/Todo.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* path URL */}
        <Route path="/" element={<App />} />
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
    </BrowserRouter>
  </React.StrictMode>,
);
