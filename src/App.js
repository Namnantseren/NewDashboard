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
import { useEffect, useState, createContext } from 'react';
export const Productcontext = createContext();

function App() {
  const [data, setData] = useState();
  const [register, setRegister] = useState();
  const [worker, setWorker] = useState(true);
  const [useContext, setUseContext] = useState();

  useEffect(() => { 
      axios.get(`http://localhost:2031/products `)
      .then((res) => setData(res.data))
  }, [worker]);
  console.log("First Data :",data);
  
  useEffect(() => {
    axios.get(`http://localhost:2030/registerUser`).then((res) => setRegister(res.data))
  }, [worker])
  console.log("Register Data 1 :", register)
  return (
    <div className="App">
      {/* <button onClick={()=> setWorker(!worker)}>reload</button> */}
        <Productcontext.Provider value={{data, setData, register, setRegister}}>
          <Routes>
            <Route/>
            <Route path='/' element={<AllDash/>}/>
            <Route path='/Dashboard/AllDash' element={<AllDash/>}/>
            <Route path='/Dashboard/Product' element={<Product setWorker={setWorker} worker={worker}/>}/>
            <Route path='/Dashboard/Orders' element={<Orders/>}/>
            <Route path='/Dashboard/Users' element={<Users setWorker={setWorker} worker={worker}/>}/>
            <Route path='/Dashboard/Moderator' element={<Moderator/>}/>
            <Route path='/Dashboard/Settings' element={<Settings/>}/>
            <Route element={<ProductCanvas/>}/>
          </Routes>
        </Productcontext.Provider>
    </div>
  );
}



export default App;
