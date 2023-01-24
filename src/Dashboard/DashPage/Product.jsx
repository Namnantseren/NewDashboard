import Dashboard from "../Dashside/Dashside"
import Dashboardnav from "../Dnav/Dashboardnav"
import ProductCard from "../productCard/ProductCard"
import { Data } from "../../utils/Data/Data"
import './DashStyle/DashStyle.css'
import { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Dashdash() {
    const [input, setinput] = useState(Data);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function changer(e){
        if(e.target.innerText === "All") {
            setinput(Data);
        } else {
           let hoh = Data.filter((cate) =>  cate.category.includes(e.target.innerText))
           setinput(hoh);
        }
    }


    return (
        <div>
            <Dashboardnav/>
            <div className="d-flex">
                <Dashboard/>
                <div className="allofdash">
                    <div className="allDash">
                        <div className="navofdash">
                            <h1 className="containerofdd">Бүтээгдэхүүнүүд</h1>
                            <div >
                                
                                <Button variant="primary" onClick={handleShow} className="mt-4 add-product-color">
                                    Бараа нэмэх
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} placement="end">
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                    </Offcanvas.Body>
                                </Offcanvas>


                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="mt-4 product-all-color">
                                    Бүгд
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" onClick={changer}>All</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={changer}>computers & tablets</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={changer}>gaming console</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={changer}>telescope</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={changer}>appliances</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="midofdash">
                            <div className="flex justify-content-between p-5 pt-3 pb-0">
                                <p>Сүүлд зарагдсан</p>
                                <img src="../google1.svg" alt="" />
                            </div>
                            <div className="flex justify-content-around prod-list-color pt-3">
                                <p>Зураг</p>
                                <p>Барааны нэр</p>
                                <p>Үнэ</p>
                                <p>Үлдэгдэл</p>
                                <p>Хямдрал%</p>
                                <p>Категори</p>
                                <p>:</p>
                            </div>
                            <div>
                            {input.map((item, index) => (
                                <div key={index}>
                                    <ProductCard item={item}/>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}