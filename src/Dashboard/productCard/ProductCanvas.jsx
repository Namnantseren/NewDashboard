import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "../Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Canvas(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shower, setShower] = useState([]);
  const { data } = props;
  console.log("datashuuu!!!!:", data);
  
  
  function save(e) {
    e.preventDefault();
    let productObject = {
      image: e.target.image.value,
      name: e.target.setSendname.value,
      price: e.target.setSendprice.value,
      stock: e.target.setSendmoney.value,
      sale: e.target.setSale.value,
      category: e.target.setSendcategory.value,
    };
    axios.put(`http://localhost:2030/users/${data.id}`, {productObject});
    console.log("datagiin ID:", data.id)
    // window.location.reload();
    console.log("Yvuulj bgashu:", productObject);
  }
  console.log("Yvuulj bgashu:", save);
  return (
    <div>
      <Button onClick={handleShow} className="danger" variant="success">
        Edit
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="off-Canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className="product-info">
              <form className="d-flex flex-wrap" onSubmit={save}>
                <div className="d-flex flex-wrap">
                  <div>
                    <h4>Барааны зураг</h4>
                    <input type="text" placeholder="Барааны нэр" name="image" defaultValue={data && data.image}/>
                  </div>
                  <div>
                    <h4>Барааны нэр</h4>
                    <input
                      type="text"
                      placeholder="Барааны нэр"
                      name="setSendname"
                      defaultValue={data && data.name}
                    />
                  </div>
                  <div>
                    <h4>Барааны үнэ ($)</h4>
                    <input
                      type="number"
                      placeholder="Барааны үнэ ($)"
                      name="setSendprice"
                      defaultValue={data && data.price}
                    />
                  </div>
                  <div>
                    <h4>Үлдэгдэл</h4>
                    <input
                      type="text"
                      placeholder="Үлдэгдэл"
                      name="setSendmoney"
                      defaultValue={data ? data.stock: ""}
                    />
                  </div>
                  <div>
                    <h4>Хямдрал</h4>
                    <input type="text" placeholder="Sale" name="setSale" defaultValue={data ? data.sale: ""}/>
                    
                  </div>
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
                <h2>Үзүүлэлтүүд</h2>
                {shower &&
                  shower.map((unit, index) => {
                    return (
                      <div key={index}>
                        <label htmlFor="">{unit[0]}</label>
                        <input type="text" defaultValue={unit[1]} />
                      </div>
                    );
                  })}
              </div>
              <Modal setShower={setShower} shower={shower} />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
