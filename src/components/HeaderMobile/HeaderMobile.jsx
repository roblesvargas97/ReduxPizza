import React from 'react';
import { Link } from 'react-router-dom';
import {FaPizzaSlice , FaInfo , FaHome, FaSun , FaMoon} from 'react-icons/fa';


const HeaderMobile = () => {
    return (
        <div  className='w-full h-[100vh] block lg:hidden bg-slate-600 absolute top-0 left-0'>
            <div className='w-[70%] h-full px-10 flex flex-col items-center space-y-10 bg-gradient-to-t from-dark-blue via-dark-blue to-dark-blue-1 min-w-[320px]'>
                <div className='w-full flex justify-end'>
                    <button className=' w-14 h-7 flex items-center border-2 rounded-lg bg-white-glass backdrop-blur-sm border-blue justify-between relative cursor-pointer transition-all duration-300 ease-in-out hover:shadow-white'>
                        <FaSun className=' text-white'/>
                        <FaMoon className=' text-white'/>
                        <span className=' absolute w-7 h-7 bg-white top-[-2px] left-[-2px] rounded-lg'/>
                    </button>
                </div>
                <img className='w-[150px] h-[100px]' src="https://i.imgur.com/KVwBOVw.png" alt="logo"/>
                <nav className='w-full flex flex-col space-y-5' >
                    <Link 
                        to="#"
                        className='w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 border-blue'
                        >Menu <FaHome/> </Link>
                    <Link  
                        to="#"
                        className='w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 border-blue'    
                    >Informacion <FaInfo/> </Link>
                    <Link 
                        className='w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 border-blue'
                        to="#">
                    Arma tu pizza <FaPizzaSlice/> </Link>
                </nav>
            </div>
        </div>
    );
}

export default HeaderMobile;