import React from 'react';
import ReactSelect from 'react-select';
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import "./Navbar.css"

function Navbar() {

  return (
    <div className='navbar'>
        <div className='nav_sec1'>
            <div className='nav_title'>
                <h3 className='title'>BookUsNow</h3>
                <div className="Location_small">
                    <select> 
                    <option>
                        Mumbai, Ind
                    </option>
                    <option>
                        <FaLocationDot style={{color:"black",fontSize:"1.4rem"}}/>
                        Hyderabad, Ind
                    </option>
                    <option>
                        Banglore, Ind
                    </option>
                    <option>
                        Lucknow, Ind
                    </option>
                    </select>
        </div>
            </div>
            <IoSearch className="search_icon_mobile" />
            <div className='nav_search'>
                <div className='categories'>
                    <PiListBold/>
                    <p className='cate_head'>Categories</p>
                </div>
                <div className="search_bar">
                    <input type="text" placeholder="Search" />
                     <IoSearch className="search_icon" />
                </div>
            </div>
            <div className='nav_buttons'>
                <div className='favs'>
                    <FaHeart className='heart_icon'/>
                    <p className='fav'>Favourites</p>
                </div>
                <FaUserLarge className='user_icon' />
                <button className='signIn_btnn'>Sign In</button>
            </div>
        </div>
        <div className='nav_sec2'>
        <div className="Location_large">
          <select> 
            <option>
                Mumbai, Ind
            </option>
            <option>
                Hyderabad, Ind
            </option>
            <option>
                Banglore, Ind
            </option>
            <option>
                Lucknow, Ind
            </option>
          </select>
        </div>
            <div className='categories_list categories_list_large'>
                <button className='cat_btn'>Live Shows</button>
                <button className='cat_btn'>Stream</button>
                <button className='cat_btn'>Movies</button>
                <button className='cat_btn'>Plays</button>
                <button className='cat_btn'>Events</button>
                <button className='cat_btn'>Sports</button>
                <button className='cat_btn'>Activities</button>
            </div>
            <div className='categories_list categories_list_small'>
                <button className='cat_btn'>Live Shows</button>
                <button className='cat_btn'>Movies</button>
                <button className='cat_btn'>Plays</button>
                <button className='cat_btn'>Events</button>
                <button className='cat_btn'>Sports</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
