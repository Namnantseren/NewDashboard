import "./productStyle/product.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import ProductCanvas from "../productCard/ProductCanvas";

export default function UserCard(prop) {
  console.log("s");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user, worker, setWorker } = prop;
  // const [refresher, setRefresher] = useState(true);
  console.log("check");

  function remover() {
    // e.preventDefault()
    axios.delete(`http://localhost:2030/registerUser/${user.id}`);
    setWorker(!worker);
  }
  return (
    <div>
      <div className="d-flex justify-content-evenly">
      <div className="product-same-size">
          <p>{user.id.slice(0, 7)}...</p>
        </div>
        <div className="product-same-size">
          <p>{user.surname}</p>
        </div>
        <div className="product-same-size">
          <p>{user.name}</p>
        </div>
        <div className="product-same-size">
          <p>{user.email}</p>
        </div>
        <div className="product-same-size">
          <p>{user.phonenumber}</p>
        </div>
        <div className="product-same-size">
          <p>{user.password}</p>
        </div>
        <div className="product-same-size">
          <p>{user.repassword}</p>
        </div>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="mt-4" variant="empty">
            :
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <ProductCanvas data={user} />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Button variant="danger" onClick={handleShow}>
                Delete
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <div className="d-flex flex-wrap">
                  <Modal.Body>
                    Та {user.name}-г устгахдаа итгэлтэй байна уу?
                    <Button
                      variant="primary"
                      onClick={() => (remover(user.id), handleClose())}
                    >
                      Тийм
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Үгүй
                    </Button>
                  </Modal.Body>
                </div>
              </Modal>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
