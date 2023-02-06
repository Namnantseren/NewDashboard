import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllDash from './Dashboard/DashPage/AllDash'
import Product from './Dashboard/DashPage/Product'
import Orders from './Dashboard/DashPage/Orders'
import Users from './Dashboard/DashPage/Users'
import Moderator from './Dashboard/DashPage/Moderator'
import Settings from './Dashboard/DashPage/Settings'
import ProductCanvas from "./Dashboard/productCard/ProductCanvas"
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();
  const [worker, setWorker] = useState(true);
  useEffect(() => { 
      axios.get(`http://localhost:2030/users`)
      .then((res) => setData(res.data))
  }, [worker]);
  console.log(data, "ene bol data")
  return (
    <div className="App">
      <button onClick={()=> setWorker(!worker)}>reload</button>
        <Routes>
          <Route/>
          <Route path='/' element={<AllDash/>}/>
          <Route path='/Dashboard/AllDash' element={<AllDash/>}/>
          <Route path='/Dashboard/Product' element={<Product setWorker={setWorker} worker={worker} data={data}/>}/>
          <Route path='/Dashboard/Orders' element={<Orders/>}/>
          <Route path='/Dashboard/Users' element={<Users/>}/>
          <Route path='/Dashboard/Moderator' element={<Moderator/>}/>
          <Route path='/Dashboard/Settings' element={<Settings/>}/>
          <Route element={<ProductCanvas data={data}/>}/>
        </Routes>
    </div>
  );
}



export default App;
