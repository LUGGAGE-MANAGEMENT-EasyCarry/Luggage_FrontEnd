import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar } from "./components";
import {HomePage, Customers, Flights, Luggages, CreateFlight} from './pages';
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Auth from './Auth';

const App = () => {

  const {activeMenu} = useStateContext();
  const [authenticateUser, setAuthenticateUser] = useState();

  return (
    <div>
      <Router>
      {authenticateUser ? (
       <div className="flex relative dark:bg-main-dark-bg">
         {activeMenu ? (
           <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
           <Sidebar/>
           </div>
         ) : (
           <div className="w-0 dark:bg-secondary-dark-bg">  
               <Sidebar/>
           </div>
         )}
         <div
           className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
             activeMenu ? "md:ml-72" : "flex-2"
           }`}
         >
         <div className="fixed md:static bd-main-bg dark:bg-main-dark-bg navbar w-full">
           <Navbar/>
          </div> 
          <div> 
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/homepage" element={<HomePage/>}/>
              <Route path="/flights" element={<Flights/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/luggages" element={<Luggages/>}/>
              <Route path="/createflight" element={<CreateFlight/>}/>
            </Routes>
          </div>
        </div> 
       </div>
      ):
      <Auth setAuthenticateUser={setAuthenticateUser} />
      }
      </Router>
    </div>
  );
}

export default App;