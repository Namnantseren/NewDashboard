import Dashboard from "../Dashside/Dashside";
import Dashboardnav from "../Dnav/Dashboardnav";
import Dropdown from "react-bootstrap/Dropdown";
import "./DashStyle/DashStyle.css";

export default function Dashdash() {
  return (
    <div>
      <Dashboardnav />
      <div className="d-flex">
        <Dashboard />
        <div className="allofdash">
          <div className="allDash">
            <div className="navofdash">
              <h1 className="containerofdd">Хэрэглэгчид</h1>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <input type="Хайх" />
              </div>
            </div>
            <div className="midofdash ">
              <div className="flex justify-content-around prod-list-color pt-3">
                <p>User ID</p>
                <p>Овог</p>
                <p>Нэр</p>
                <p>И-мэйл хаяг</p>
                <p>Утас</p>
                <p>Захиалга</p>
                <p>Огноо</p>
                <p>:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
