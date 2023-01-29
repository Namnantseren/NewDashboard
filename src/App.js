import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllDash from './Dashboard/DashPage/AllDash'
import Product from './Dashboard/DashPage/Product'
import Orders from './Dashboard/DashPage/Orders'
import Users from './Dashboard/DashPage/Users'
import Moderator from './Dashboard/DashPage/Moderator'
import Settings from './Dashboard/DashPage/Settings'
import axios from 'axios';
import { useEffect, useState } from 'react';
// import Dashboard from './main/Dashboard'

function App() {
  const [data, setData] = useState();
  useEffect(() => {
      axios.get(`http://localhost:2030/users`)
      .then((res) => setData(res.data))
  }, []);
  console.log(data, "ene bol data")
  return (
    <div className="App">
        {/* <Dashboard/> */}
        <Routes>
          <Route/>
          <Route path='/Dashboard/AllDash' element={<AllDash/>}/>
          <Route path='/Dashboard/Product' element={<Product data={data}/>}/>
          <Route path='/Dashboard/Orders' element={<Orders/>}/>
          <Route path='/Dashboard/Users' element={<Users/>}/>
          <Route path='/Dashboard/Moderator' element={<Moderator/>}/>
          <Route path='/Dashboard/Settings' element={<Settings/>}/>
        </Routes>
    </div>
  );
}



export default App;
