import Aside from '../components/Aside';
import NextSchedules from '../components/Aside/NextSchedules';
import Dashboard from '../components/Dashboard';
import SideBar from '../components/Sidebar';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Dashboard />
      <Aside>
        <NextSchedules />
      </Aside>
      {/* <Button>Botão</Button> */}
    </div>
  );
}
