import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../data/Lugagge_Logo.jpg';

import {links} from '../data/dummy';

const Sidebar = () => {

  const {activeMenu, setActiveMenu, screenSize, setScreenSize} = useStateContext();
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-center items-center">
          <Link 
            to="/"
            onClick={handleCloseSidebar} 
            className="items-center mt-4 flex">
            <img src={logo} alt="Logo" className="h-36"/>
          </Link>
          <TooltipComponent content="menu" position="BottomCenter">
              <button 
              type="button" 
              onClick={() => 
                setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel/>
              </button>
          </TooltipComponent>
        </div>
        <div className="mt-2">
          {links.map((item) => (
            <div key={item.title}>
               {item.links.map((link) => (
                <NavLink 
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSidebar}
                  className={({isActive}) =>
                    isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className="capitalize">
                    {link.name}
                  </span>
                </NavLink>
               ))}
            </div>
          ))}
        </div>
      
      </>)}
    </div>
  )
}

export default Sidebar
