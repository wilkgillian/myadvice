import styles from './styles.module.scss';
import { Calendar } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import NextSchedules from './NextSchedules';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface AsideProps {
  children: ReactNode;
}

export default function Aside({ children }: AsideProps) {
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
  const router = useRouter();
  return (
    <div className={styles.container}>
      {router.asPath == '/' ? (
        <>
          <Calendar
            bordered
            compact={true}
            className={styles.calendar}
            locale={calendar}
          />
          {children}
        </>
      ) : (
        <>
          {children}
          <Calendar
            bordered
            compact={true}
            className={styles.calendar}
            locale={calendar}
          />
        </>
      )}
    </div>
  );
}
