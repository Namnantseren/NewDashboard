import Dashboard from "../Dashside/Dashside"
import Dashboardnav from "../Dnav/Dashboardnav"
import './DashStyle/DashStyle.css'

export default function Dashdash() {
    return (
        <div>
            <Dashboardnav/>
            <div className="d-flex">
                <Dashboard/>
                <div className="allofdash">
                    <div className="allDash">
                        <div className="navofdash">
                            <h1 className="containerofdd">Тохиргоо</h1>
                        </div>
                        <div className="midofdash">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}