import { Accordion, Button, Image } from 'react-bootstrap';
import NextSchedules from '../Aside/NextSchedules';
import SchedulingItem from '../SchedulingItem';
import styles from './styles.module.scss';

export default function SchedulingList() {
  const currentDate = new Date().getUTCDate();
  return (
    <div className={styles.container}>
      <h1>{currentDate}</h1>
      <div>
        {Array.from({ length: 7 }).map((_, index) => (
          <SchedulingItem key={index} />
        ))}
      </div>
    </div>
  );
}
