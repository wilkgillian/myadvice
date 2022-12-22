import { Accordion, Button, Image } from 'react-bootstrap';
import { FiCalendar, FiTrash, FiEdit } from 'react-icons/fi';
import styles from './styles.module.scss';

export default function SchedulingItem() {
  return (
    <div className={styles.container}>
      <span>08:00</span>
      <div className={styles.card}>
        <Image
          src="http://github.com/wilkgillian.png"
          alt="image"
          height={50}
          className="mx-2"
          roundedCircle={true}
        />
        <div>
          <h1>Nome do elemento</h1>
          <p>Tipo de agendamento</p>
        </div>
      </div>
      <div className={styles.icons}>
        <FiCalendar />
        <FiTrash />
        <FiEdit />
      </div>
    </div>
  );
}
