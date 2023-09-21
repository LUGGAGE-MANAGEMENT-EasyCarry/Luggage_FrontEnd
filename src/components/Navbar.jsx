import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Notification, UserProfile} from '.';
import {useStateContext} from '../contexts/ContextProvider';

const NavButtton = ({title, customFunc, icon, color, dotColor}) => (
     <TooltipComponent content={title} position="BottomCenter">
      <button 
        title="button"
        onClick={customFunc}
        style={{color}}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      > 
        <span style={{background: dotColor}}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
          {icon}
      </button>
     </TooltipComponent>
)

const Navbar = () => {

  const {setActiveMenu, 
         isClicked,
         handleClick,
         screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    } 
  }, [screenSize]);


  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButtton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="black"
        icon={<AiOutlineMenu/>}
      />
      <div className="flex">   
          <NavButtton 
            title="Notification" 
            dotColor="#03C9D7"
            customFunc={() => handleClick ('notification')}
            color="black"
            icon={<RiNotification3Line/>}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
            <div 
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick ('userProfile')}
            > 
                <p>
                  <span className="text-gray-400 text-14"> Hoşgeldin, </span> {''}
                  <span className=" text-gray-400 font-bold ml-1 text-14"> Furkan </span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
        </TooltipComponent>

        {isClicked.notification && <Notification/>}
        {isClicked.userprofile && <UserProfile/>}
      </div>

    </div>
  )
}

export default Navbar
