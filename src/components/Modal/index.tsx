import { FormEventHandler, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosAddCircle } from 'react-icons/io';
import { addConsult } from '../../utils';

export default function AddConsultModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAddConsult() {
    // event.preventDefault();
    addConsult({
      data: {
        name: name,
        description: description
      }
    });
    setName('');
    setDescription('');
    handleClose;
  }
  console.log(localStorage.getItem('consultas'));
  return (
    <>
      <IoIosAddCircle onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar uma consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body as="form" onSubmit={handleAddConsult}>
          <input
            value={name}
            type="text"
            placeholder="Nome do paciente"
            onChange={event => setName(event.target.value)}
          />
          <input
            value={description}
            type="text"
            placeholder="Breve descrição"
            onChange={event => setDescription(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleAddConsult}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
