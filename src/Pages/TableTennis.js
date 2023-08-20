import React from 'react'
import Versus from '../Images/Versus2.jpg';
import { FiClock,FiHeart } from 'react-icons/fi';
import {CiLocationOn} from 'react-icons/ci'
import El from '../Images/AmericanFootball.jpeg'


const TableTennis = ({Sports,onHeart}) => {
  
  return (
    <>
    <div className="shadow" ><img src={El} className='poster' style={{width:"70%"}} alt=''/></div>
    <div className='container-section content-section'>
        <h2 class="section-header">Latest Matches</h2> 
            {Sports?.map((item,index)=>
                item.Category==="AmericanFootball" && 
                <>
                    <div className='match-row'>
                        <div className='team-name'>
                            <img
                            className="cart-item-image"
                            src={item.icon_A}
                            alt=''/>
                            <span className="cart-item-title">{item.Team_A}</span>
                        </div>
                        <img className='match-column versus-icon' src={Versus} alt='' width={50} height={40} />
                        <div className='team-name'>
                            <img
                            className="cart-item-image"
                            src={item.icon_B}
                            alt=''/>
                            <span className="cart-item-title">{item.Team_B}</span>
                        </div>
                        <div className='match-column content-width time-padding'>
                            <FiClock className='icon-size'/>
                            <span className="cart-price ">{item.Time}</span>
                        </div>
                        <div className='match-column content-width'>
                            <CiLocationOn className='icon-size'/>
                            <span className="cart-price ">{item.location}</span>
                        </div>
                        <div className='match-column content-width'>
                            <FiHeart className='icon-heart' onClick={()=>onHeart(item.id)} style={{fill: item.heart_clicked ? 'red':'none',cursor:'pointer'}}/>
                        </div>
                    </div>
                </>
            
            
            )}
    
        </div>
    </>
    )
}

export default TableTennis
