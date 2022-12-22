import dynamic from 'next/dynamic';
// import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import Searchbar from '../Searchbar/Searchbar';
import NoticesAndStickyNotes from '../Table';
import styles from './styles.module.scss';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: 'black'
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: 'black'
    },
    axisTicks: {
      color: 'black'
    },
    categories: [
      '2022-12-18T08:00:00.000Z',
      '2022-12-18T09:00:00.000Z',
      '2022-12-18T10:00:00.000Z',
      '2022-12-18T11:00:00.000Z',
      '2022-12-18T12:00:00.000Z',
      '2022-12-18T14:00:00.000Z',
      '2022-12-18T15:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};
const series = [
  {
    name: 'series1',
    data: [2, 4, 3, 5, 4, 2, 5]
  }
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Searchbar />
      <div className={styles.dashboard}>
        <h1>DASHBOARD</h1>
        <div className={styles.grid}>
          <Card style={{ width: '100%', background: 'transparent' }}>
            <Card.Body>
              <Card.Title>Atendimentos do dia</Card.Title>
              <Chart options={options} series={series} type="area" />
            </Card.Body>
          </Card>
          <div className={styles.monetary}>
            <Card style={{ width: '100%', height: '100%' }}>
              <Card.Body>
                <Card.Title>Faturamento atual</Card.Title>
                <Card.Text>R$ 3200,00</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '100%', height: '100%' }}>
              <Card.Body>
                <Card.Title>Quantidade de consultas</Card.Title>
                <Card.Text>25</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className={styles.dashboard}>
        <h1>AVISOS/LEMBRETES</h1>
        <NoticesAndStickyNotes />
      </div>
    </div>
  );
}
