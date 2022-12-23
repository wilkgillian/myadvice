import { FiFilter } from 'react-icons/fi';
import Searchbar from '../components/Searchbar/Searchbar';
import SideBar from '../components/Sidebar';
import NoticesAndStickyNotes from '../components/Table';
import styles from '../styles/styles.module.scss';

export default function Consults() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.consult_content}>
        <div className={styles.filter}>
          <Searchbar />
          <div>
            <span>
              <FiFilter />
              Filtros Avançados
            </span>
          </div>
        </div>
        <NoticesAndStickyNotes />
      </div>
    </div>
  );
}
