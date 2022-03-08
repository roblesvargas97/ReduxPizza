import React from 'react';
import { Link } from 'react-router-dom';
import {FaPizzaSlice , FaInfo , FaHome, FaSun , FaMoon} from 'react-icons/fa';


const MenuMobile = () => {
    return (
        <div  className='w-full h-[100vh] block lg:hidden bg-slate-600 absolute top-0 left-0'>
            <div className='w-[70%] h-full px-10 flex flex-col items-center space-y-10 bg-gradient-to-t from-dark-blue via-dark-blue to-dark-blue-1 min-w-[320px] md:w-[55%]'>
                <button></button>
                <img className='w-[150px] h-[100px]' src="https://i.imgur.com/KVwBOVw.png" alt="logo"/>
                <nav className='w-full flex flex-col space-y-5' >
                    <Link 
                        to="#"
                        className=' w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 '
                        >Menu <FaHome/> </Link>
                    <Link  
                        to="#"
                        className=' w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 '    
                    >Informacion <FaInfo/> </Link>
                    <Link 
                        className=' w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 '
                        to="#">
                    Arma tu pizza <FaPizzaSlice/> </Link>
                </nav>
            </div>
        </div>
    );
}

export default MenuMobile;