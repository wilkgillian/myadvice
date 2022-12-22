import { Button, Form } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import styles from './styles.module.scss';

export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="BUSCA" />
      <Button variant="none">
        <FiSearch />
      </Button>
    </div>
  );
}
