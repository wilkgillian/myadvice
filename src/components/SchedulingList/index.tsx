import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Accordion, Button, Image } from 'react-bootstrap';
import NextSchedules from '../Aside/NextSchedules';
import SchedulingItem from '../SchedulingItem';
import styles from './styles.module.scss';

export default function SchedulingList() {
  const date = new Date(Date.now());
  const today = format(date, 'dd/MMM yyyy', {
    locale: ptBR
  });
  return (
    <div className={styles.container}>
      <h1>{today}</h1>
      <div>
        {Array.from({ length: 7 }).map((_, index) => (
          <SchedulingItem key={index} />
        ))}
      </div>
    </div>
  );
}
