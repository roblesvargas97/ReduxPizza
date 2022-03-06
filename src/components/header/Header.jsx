import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='w-full h-[15vh] bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 backdrop-blur-sm border-b-2 border-blue-500 hidden lg:flex items-center justify-center'>
            <img className='l w-[10%] h-[80%]' src="https://i.imgur.com/KVwBOVw.png" alt="logo"/>
            <nav className='flex justify-between space-x-5 bg-white-glass backdrop-blur-sm text-white text-xl font-bold py-2 px-10  rounded-lg'>
                <Link 
                    to="#"  
                    className='first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >Menu</Link>
                <Link 
                    to="#"  
                    className='first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >Informacion</Link>
                <Link 
                    to="#"  
                    className='first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >Arma tu pizza</Link>
            </nav>
        </header>
    );
}

export default Header;