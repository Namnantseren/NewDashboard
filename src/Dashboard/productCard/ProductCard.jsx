import './productStyle/product.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Card(prop) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <p>15</p>
                </div >
                <div className='product-same-size'>
                    <p>0</p>
                </div>
                <div className='product-same-size'>
                    <p>{prop.item.category}</p>
                </div>
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
                        Та ‘..............’ устгахдаа итгэлтэй байна уу?
                        <Button variant="primary">
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