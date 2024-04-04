import React, { useState } from 'react'
import './header.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { TiSocialSkype } from "react-icons/ti";
import { FaRegMoon } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [search, setSearch] = useState(false)
  return (
    <div className='header-container'>
      
        <div className='header-top'>
            <div className='header-top-left'>
               <p>Home</p>
               <p>About us</p>
               <p>Contact us</p>
            </div>
            <div className='header-top-right'>
            <FaFacebook />
            <FaXTwitter />
            <IoLogoYoutube />
            <TiSocialSkype />
           
            </div>
        </div>
        
        <div className='header-bottom'>
            <div>
                {!search ?<div  className='header-bottom-left'>
                    <h1>Qnet</h1>
                <div className='dropdown'>Home</div>
                <div className='dropdown'><p>Features</p> <p><IoIosArrowDown className='icon' /></p></div>
                <div className='dropdown'><p>Mega Menu</p> <p><IoIosArrowDown className='icon'/></p></div>
                <div className='dropdown'><p>Documentation </p><p><IoIosArrowDown className='icon'/></p></div>
                <div className='dropdown'>Download This Template</div> 
                </div>: 
                <div>
                    <input placeholder='Search' />
                </div>
                }
                
                

                              
            </div>
            <div className='header-bottom-right'>
            <FaRegMoon className='dropdown' />
            <div className='dropdown search' onClick={()=>setSearch(!search)}>
            <IoSearchSharp  />
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Header
