import React from 'react'

const Header = () => {
    return (
        <header className='w-full h-[15vh] bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 backdrop-blur-sm border-b-2 border-blue-500 hidden lg:flex'>
            <img className='l w-40 h-24' src="https://i.imgur.com/KVwBOVw.png" alt="logo"/>
            
        </header>
    );
}

export default Header;