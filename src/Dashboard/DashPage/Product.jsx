import Dashboard from "../Dashside/Dashside"
import Dashboardnav from "../Dnav/Dashboardnav"
import ProductCard from "../productCard/ProductCard"
import './DashStyle/DashStyle.css'
import { createContext, useContext, useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  Modal  from "../Modal"
import axios from "axios"
import { Productcontext } from "../../App"

export default function Dashdash(props) {
    const {data} = useContext(Productcontext) 
    const {setWorker, worker} = props
    const [entred, setEntred] = useState();
    const [show, setShow] = useState(false);
    // const [name, setSendname] = useState()
    // const [price, setSendprice] = useState()
    // const [category, setSendcategory] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [shower, setShower] = useState([]);
    console.log(data, "ene bol product data")

    function changer(e){
        if(e.target.innerText === "All") {
            setEntred(data);
        } else {
           let hoh = data.filter((cate) =>  cate.category.includes(e.target.innerText))
           setEntred(hoh);
        }
    }

    function save(e) {
        e.preventDefault();
        axios.post("http://localhost:2030/users", {
            image: e.target.image.value,
            name: e.target.setSendname.value,
            price: e.target.setSendprice.value,
            stock: e.target.setSendmoney.value,
            sale: e.target.setSale.value,
            category: e.target.setSendcategory.value,
        })
        console.log("postObj shuu:",e.target.setSendname.value)
        // window.location.reload()
        setWorker(!worker)
    }

    return <>{data && (
        <div>
            <Dashboardnav/>
            <div className="d-flex">
                <Dashboard/>
                <div className="allofdash">
                    <div className="allDash">
                        <div className="navofdash">
                            <h1 className="containerofdd">??????????????????????????????</h1>
                            <div >
                                
                                <Button variant="primary" onClick={handleShow} className="mt-4 add-product-color">
                                    ?????????? ??????????
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} placement="end" className="off-Canvas">
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                    <div>
                                        <div className="product-info">
                                            <form className="d-flex flex-wrap" onSubmit={save}>
                                                <div className="d-flex flex-wrap">
                                                    <div>
                                                        <h4>?????????????? ??????????</h4>
                                                        <input type="text" placeholder="?????????????? ??????????" name="image"/>
                                                    </div>
                                                    <div>
                                                        <h4>?????????????? ??????</h4>
                                                        <input type="text" placeholder="?????????????? ??????" name="setSendname"/>
                                                    </div>
                                                    <div>
                                                        <h4>?????????????? ?????? ($)</h4>
                                                        <input type="number" placeholder="?????????????? ?????? ($)" name="setSendprice"/>
                                                    </div>
                                                    <div>
                                                        <h4>????????????????</h4>
                                                        <input type="text" placeholder="????????????????" name="setSendmoney"/>
                                                    </div>
                                                    <div>
                                                        <h4>??????????????</h4>
                                                        <input type="text" placeholder="Sale" name="setSale"/>
                                                    </div>
                                                    {/* <div>
                                                        <h4>Category</h4>
                                                        <input type="text" placeholder="?????????????? ?????? ($)" name="setSendcategory"/>
                                                    </div> */}
                                                    <select id="category" name="setSendcategory">
                                                        <h4>Category</h4>
                                                        <option value="appliances">appliances</option>
                                                        <option value="computers & tablets">
                                                            computers & tablets
                                                        </option>
                                                        <option value="gaming console">gaming console</option>
                                                        <option value="telescope">telescope</option>
                                                        <option value="pad">pad</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <button type="submit">Save</button>
                                                </div>
                                            </form>
                                            <div className="">
                                                <h2>??????????????????????</h2>
                                                {shower && shower.map((unit, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <label htmlFor="">{unit[0]}</label>
                                                            <input type="text" defaultValue={unit[1]} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <Modal setShower={setShower} shower={shower}/>
                                        </div>
                                        
                                    </div>
                                    </Offcanvas.Body>
                                </Offcanvas>


                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="mt-4 product-all-color">
                                    ????????
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
                                <p>?????????? ??????????????????</p>
                                <img src="../google1.svg" alt="" />
                            </div>
                            <div className="flex justify-content-around prod-list-color pt-3">
                                <p>??????????</p>
                                <p>?????????????? ??????</p>
                                <p>??????</p>
                                <p>????????????????</p>
                                <p>??????????????%</p>
                                <p>????????????????</p>
                                <p>:</p>
                            </div>
                            <div>
                                {data.map((item, index) => (
                                    <div key={index}>
                                        <ProductCard item={item} worker={worker} setWorker={setWorker}/>
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