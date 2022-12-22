import styles from './styles.module.scss';
import { Calendar } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import NextSchedules from './NextSchedules';

export default function Aside() {
  const calendar = {
    sunday: 'Dom',
    monday: 'Seg',
    tuesday: 'Ter',
    wednesday: 'Qua',
    thursday: 'Qui',
    friday: 'Sex',
    saturday: 'Sab',
    ok: 'OK',
    today: 'Hoje',
    yesterday: 'Ontem',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    january: 'Jan',
    february: 'Fev',
    march: 'Mar',
    april: 'Abr',
    may: 'Mai',
    june: 'Jun',
    july: 'Jul',
    august: 'Ago',
    september: 'Set',
    octuber: 'Out',
    november: 'Nov',
    december: 'Dez',
    formattedMonthPattern: 'MMM yyyy',
    formattedDayPattern: 'dd MMM yyyy',
    dateLocale: ptBR
  };

  return (
    <div className={styles.container}>
      <Calendar
        bordered
        compact={true}
        className={styles.calendar}
        locale={calendar}
      />
      <NextSchedules />
    </div>
  );
}
