import Dashboard from "../Dashside/Dashside"
import Dashboardnav from "../Dnav/Dashboardnav"
import ProductCard from "../productCard/ProductCard"
import './DashStyle/DashStyle.css'
import { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  Modal  from "../Modal"

export default function Dashdash(props) {
    const {data} = props
    const [entred, setEntred] = useState();
    const [show, setShow] = useState(false);
    const [name, setSendname] = useState()
    const [price, setSendprice] = useState()
    const [category, setSendcategory] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [shower, setShower] = useState([]);
    console.log(data, "ene bol; product data")

    function changer(e){
        if(e.target.innerText === "All") {
            setEntred(data);
        } else {
           let hoh = data.filter((cate) =>  cate.category.includes(e.target.innerText))
           setEntred(hoh);
        }
    }

    function save() {
        return (
            setEntred([...entred, {name, price, category}])
        )
    }


    return <>{data && (
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

                                <Offcanvas show={show} onHide={handleClose} placement="end" className="off-Canvas">
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                    <div>
                                        <div className="product-info">
                                            <div className="d-flex flex-wrap">
                                                <div>
                                                    <h4>Барааны нэр</h4>
                                                    <input type="text" placeholder="Барааны нэр" onChange={(e) => setSendname(e.target.innerText)}/>
                                                </div>
                                                <div>
                                                    <h4>Барааны үнэ ($)</h4>
                                                    <input type="number" placeholder="Барааны үнэ ($)" onChange={(e) => setSendprice(e.target.value)}/>
                                                </div>
                                                <div>
                                                    <h4>Үлдэгдэл</h4>
                                                    <input type="text" placeholder="Үлдэгдэл" onChange={(e) => setSendcategory(e.target.value)}/>
                                                </div>
                                                <div>
                                                    <h4>Category</h4>
                                                    <input type="text" placeholder="Барааны үнэ ($)" onChange={(e) => setSendcategory(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="">
                                                <h2>Үзүүлэлтүүд</h2>
                                                {shower && shower.map((unit) => {
                                                    return (
                                                        <div>
                                                            <label htmlFor="">{unit[0]}</label>
                                                            <input type="text" defaultValue={unit[1]} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <Modal setShower={setShower} shower={shower}/>
                                        </div>
                                        <div>
                                            <button onClick={save}>Save</button>
                                        </div>
                                    </div>
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
                            {data.map((item, index) => (
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
    )}</> 
}