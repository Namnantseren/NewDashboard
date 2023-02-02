import "./productStyle/product.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import ProductCanvas from '../productCard/ProductCanvas'

export default function Card(prop) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {item} = prop
  // console.log("Item iiin data:", item)

  function remover() {
    axios.delete(`http://localhost:2030/users/${item.id}`);
    console.log("itemiin ID:",item.id);
    // window.location.reload();
  }
  // window.location.reload()
  return (
    <div>
      <div className="d-flex justify-content-evenly">
        <div className="product-image product-same-size">
          <img src={item.image} alt="" />
        </div>
        <div className="product-same-size">
          <p>{item.name}</p>
        </div>
        <div className="product-same-size">
          <p>${item.price}</p>
        </div>
        <div className="product-same-size">
          <p>{item.stock}</p>
        </div>
        <div className="product-same-size">
          <p>{item.sale}%</p>
        </div>
        <div className="product-same-size">
          <p>{item.category}</p>
        </div>

        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="mt-4"
            variant="empty"
          >
            :
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <ProductCanvas data={item}/>
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
                    Та {item.name}-г устгахдаа итгэлтэй байна уу?
                    <Button variant="primary" onClick={() => remover(item.id)}>
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
