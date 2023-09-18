import React from 'react';
import { RecoilRoot } from 'recoil';
import InputTask from '../features/Todo/components/InputTask';
import ShowTaskList from '../features/Todo/components/ShowTaskList';

const Todo: React.FunctionComponent = () => {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center bg-gray-200 py-2">
        <h1 className="mt-4 text-4xl font-bold text-gray-700">Todoリスト</h1>
        <div className="mt-5 w-full max-w-xl">
          <div className="w-full rounded-lg bg-white px-8 py-6 shadow-md">
            <InputTask />
          </div>
          <div className="mt-4 w-full">
            <ShowTaskList />
          </div>
        </div>
      </main>
    </RecoilRoot>
  );
};

export default Todo;
