import { FC } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Link to="/todo">Todo</Link>
    </>
  );
};

export default App;
