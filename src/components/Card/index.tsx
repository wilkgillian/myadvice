import { Image } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function Card() {
  return (
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
  );
}
