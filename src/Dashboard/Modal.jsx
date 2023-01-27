import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Example(prop) {
  const [show, setShow] = useState(false);
  const {shower} = prop;
  const {setShower} = prop;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function handleSaver(a){
    a.preventDefault()
    setShower([...shower, [a.target.setNewInput.value, a.target.setSecondInput.value]])
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        + Үзүүлэлт нэмэх
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Үзүүлэлт нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSaver}>
                <input type="text" name='setNewInput'/>
                <input type="text" name="setSecondInput"/>  
                <button type='submit'>Btn</button>       
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
