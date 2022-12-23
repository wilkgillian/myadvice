import Link from 'next/link';
import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import { IoIosAddCircle } from 'react-icons/io';
import { MdOutlineMedicalServices } from 'react-icons/md';
import styles from './styles.module.scss';

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.sidebar}>
      <Button variant="none" onClick={handleShow}>
        <AiOutlineDoubleRight />
      </Button>
      <div>
        <Link passHref href="/Scheduling">
          <a>
            <FiCalendar />
          </a>
        </Link>
        <Link passHref href="/Cadastro">
          <a>
            <IoIosAddCircle />
          </a>
        </Link>
        <Link passHref href="/Consults">
          <a>
            <MdOutlineMedicalServices />
          </a>
        </Link>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.content}>
            <Link as="div" passHref href="/Scheduling">
              <a>
                <FiCalendar />
                Agendamentos
              </a>
            </Link>
            <Link passHref href="/Cadastro">
              <a>
                <IoIosAddCircle />
                Agendamentos
              </a>
            </Link>
            <Link passHref href="/Consults">
              <a>
                <MdOutlineMedicalServices />
                Consultas agendadas
              </a>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
