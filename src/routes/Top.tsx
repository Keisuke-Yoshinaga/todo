import { FC } from 'react';
import { Link } from 'react-router-dom';

const App: FC = () => {
  return (
    <div>
      <Link to="/todo">Todo</Link>
    </div>
  );
};

export default App;
