import { taskListStatsState } from '../status/taskListState';
import { useRecoilValue } from 'recoil';

const showTaskListStats = () => {
  const { taskListLength, checkedTaskListLength, uncheckedTaskListLength } =
    useRecoilValue(taskListStatsState);

  return (
    <div className="flex w-full justify-around">
      <div>
        <span>全タスク数：</span>
        <span>{taskListLength}</span>
      </div>
      <div>
        <span>完了タスク数：</span>
        <span>{checkedTaskListLength}</span>
      </div>
      <div>
        <span>残タスク数：</span>
        <span>{uncheckedTaskListLength}</span>
      </div>
    </div>
  );
};

export default showTaskListStats;
