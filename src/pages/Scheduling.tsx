import Aside from '../components/Aside';
import NextSchedules from '../components/Aside/NextSchedules';
import SideBar from '../components/Sidebar';
import containerStyle from '../styles/styles.module.scss';
import SchedulingList from '../components/SchedulingList';

export default function Scheduling() {
  return (
    <div className={containerStyle.container}>
      <SideBar />
      <Aside>
        <h1>Medicos</h1>
        <NextSchedules />
      </Aside>
      <SchedulingList />
    </div>
  );
}
