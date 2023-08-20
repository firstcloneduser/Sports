import React, { useState } from 'react';
import { FaTableTennis, FaFootballBall,FaBasketballBall,FaBars } from "react-icons/fa";
import { BiSolidCricketBall } from "react-icons/bi";
import { IoIosTennisball,IoMdFootball } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Football",
            name:"Football",
            icon:<IoMdFootball/>
        },
        {
            path:"/AmericanFootball",
            name:"AmericanFootball",
            icon:<FaFootballBall/>
        },
        {
            path:"/Cricket",
            name:"Cricket",
            icon:<BiSolidCricketBall/>
        },
        {
            path:"/TableTennis",
            name:"TableTennis",
            icon:<FaTableTennis/>
        },
        {
            path:"/Tennis",
            name:"Tennis",
            icon:<IoIosTennisball/>
        },
        {
            path:"/Basketball",
            name:"Basketball",
            icon:<FaBasketballBall/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "17vw" : "4vw"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Sports</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div style={{marginTop: "20vh"}} className='sidebar_content'>
                    {
                        menuItem?.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                
                            </NavLink>
                        ))
                    }
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;