import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosAddCircle } from 'react-icons/io';

export default function AddConsultModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleChange(event) {
    setName(event.target.value);
  }
  console.log(name);
  return (
    <>
      <IoIosAddCircle onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar uma consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            type="text"
            placeholder="Nome do paciente"
            onChange={handleChange}
          />
          <input type="text" placeholder="Breve descrição" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
