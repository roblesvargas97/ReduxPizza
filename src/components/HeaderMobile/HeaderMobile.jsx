import React from 'react'
import {FaSun , FaMoon , FaBars} from 'react-icons/fa';

const HeaderMobile = () => {
    return (
        <div className=" w-full h-[15vh] flex items-center justify-between px-10 bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 border-b-2 border-blue backdrop-blur-sm min-w-[320px] lg:hidden ">
            <button type='button' className='text-white cursor-pointer transition-all duration-300 ease-in-out'>
                <FaBars size="30px"/>
            </button>
            <img className='w-[130px] h-[85px] md:h-[100px] md:w-[170px]' src="https://i.imgur.com/KVwBOVw.png" alt="logo"/>
            <button type='button' className='l w-14 h-7 p-1 flex items-center border-2 rounded-lg bg-white-glass backdrop-blur-sm border-blue justify-between relative cursor-pointer transition-all duration-300 ease-in-out hover:shadow-white'>
                <FaSun className=' text-white'/>
                <FaMoon className=' text-white'/>
                <span className=' absolute w-7 h-7 bg-white top-[-2px] left-[-2px] rounded-lg'/>
            </button>
        </div>
    );
}

export default HeaderMobile;