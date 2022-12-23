import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { FiCalendar, FiTrash, FiEdit } from 'react-icons/fi';
import AddConsultModal from '../Modal';
import styles from './styles.module.scss';

export default function SchedulingItem() {
  const [dataExists, setDataExists] = useState(false);
  const medical = {
    data: {
      name: 'pedrinho',
      crm: 2
    }
  };

  const dados = localStorage.getItem('medicos');
  console.log(typeof dados);
  return (
    <div className={styles.container}>
      <span>08:00</span>
      {dataExists ? (
        <>
          <div className={styles.card}>
            <Image
              src="http://github.com/wilkgillian.png"
              alt="image"
              height="100%"
              className="mx-2"
              roundedCircle={true}
            />
            <div>
              <h1>Nome do elemento</h1>
              <p>Tipo de agendamento</p>
            </div>
          </div>

          <FiCalendar />
          <FiTrash />
          <FiEdit />
        </>
      ) : (
        <AddConsultModal />
      )}
    </div>
  );
}
