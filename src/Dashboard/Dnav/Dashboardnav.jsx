import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Dnavcss/dashboard.css'
import './Dnavcss/NavStyle.css'


export default function Dash(){
    
      const [research, setResearch] = useState();
      const test1 = useParams();
      console.log(test1)
    
      function searchclick() {
        if(research !== "" || research !== undefined || research !== null){
          navigate(`/search/${research}`)
        }
      }

      const navigate = useNavigate();
      function jumpmain() {
        navigate(`/Dashboard/AllDash`);
      }
    return(
        <div className="nav-main-2">
      <div className="nav-left d-flex">
        <div className="navImage">
          <img src="../img/./LoginLogo.svg" onClick={jumpmain} alt="" />
        </div>
        <div className="allsearch">
          <form onSubmit={searchclick}>
            <input className="search2" placeholder="Serach any things" onChange={(e) => setResearch(e.target.value)}></input>
            <button className="searchBtn" type="submit">Search</button>
          </form>
        </div>
        <div>
          <button onClick={(e) => navigate(`/`)} className="logout">
            <img src="../img/./logout.svg" alt="pic" />
            Гарах
          </button>
        </div>
      </div>
    </div>
    )
}