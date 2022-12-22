import Aside from '../components/Aside';
import Dashboard from '../components/Dashboard';
import SideBar from '../components/Sidebar';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Dashboard />
      <Aside />
      {/* <Button>Botão</Button> */}
    </div>
  );
}
