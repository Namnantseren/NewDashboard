import './productStyle/product.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


export default function Card(prop) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function remover(id) {
        axios.delete(`http://localhost:2030/users/${id}`)
        console.log(id)
        window.location.reload()
    }
    function glitch() {
        window.location.reload()
    }
    // window.location.reload()
    return(
        <div>
            <div className="d-flex justify-content-evenly">
                <div className="product-image product-same-size">
                    <img src={prop.item.image} alt="" />
                </div>
                <div className='product-same-size'>
                    <p>{prop.item.name}</p>
                </div>
                <div className='product-same-size'>
                    <p>${prop.item.price}</p>
                </div>
                <div className='product-same-size'>
                    <p>{prop.item.stock}</p>
                </div >
                <div className='product-same-size'>
                    <p>{prop.item.sale}%</p>
                </div>
                <div className='product-same-size'>
                    <p>{prop.item.category}</p>
                </div>

                <button onClick={glitch}>
                    Refresher
                </button>
                <Button variant="" onClick={handleShow}>
                    :
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    
                    <div className='d-flex flex-wrap'>
                        <Modal.Body>
                        Та {prop.item.name}-г устгахдаа итгэлтэй байна уу?
                        <Button variant="primary"  onClick={() => remover(prop.item.id)}>
                            Тийм
                        </Button>
                        
                        <Button variant="secondary" onClick={handleClose}>Үгүй</Button>
                        </Modal.Body>
                    </div>
                    {/* <Modal.Footer>
                    <Button variant="primary" className=''>
                        Тийм
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>Үгүй</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </div>
    )
}