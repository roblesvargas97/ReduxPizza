import React from 'react'
import { Link } from 'react-router-dom';
import {FaSun , FaMoon} from 'react-icons/fa'

const Header = () => {
    return (
        <header className='w-full h-[15vh] bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 backdrop-blur-sm border-b-2 border-blue-500 hidden lg:flex items-center justify-between px-10'>
            <img className='l w-[120px] h-[80px]' src="https://i.imgur.com/KVwBOVw.png" alt="logo"/>
            <nav className='flex justify-between space-x-5 bg-white-glass backdrop-blur-sm text-white text-xl font-bold py-2 px-10  rounded-lg border-2 border-transparent hover:border-blue transition-all duration-300'>
                <Link 
                    to="#"  
                    className='first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >Menu</Link>
                <Link 
                    to="#"  
                    className='first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >Informacion</Link>
                <Link 
                    to="#"  
                    className='first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >Arma tu pizza</Link>
            </nav>
            <button className='l w-14 h-7 p-1 flex items-center border-2 rounded-lg bg-white-glass backdrop-blur-sm border-blue justify-between relative cursor-pointer transition-all duration-300 ease-in-out shadow-2xl '>
                <FaSun className=' text-white'/>
                <FaMoon className=' text-white'/>
                <span className=' absolute w-7 h-7 bg-white top-[-2px] left-[-2px] rounded-lg'/>
            </button>
        </header>
    );
}

export default Header;