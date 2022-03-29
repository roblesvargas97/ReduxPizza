import React from 'react';
import { FaPizzaSlice ,FaHandPointRight , FaMotorcycle } from 'react-icons/fa';

const InfoItem = ({icon , text}) => {
    return (
        <article className=' w-full md:w-80 h-60  text-gray-500 flex flex-col items-center justify-between border-2 border-gray-500  shadow-md lg:border-gray-400 lg:text-gray-400 lg:hover:text-gray-500 lg:hover:border-gray-500 shadow-gray-200 p-10 rounded-lg hover:shadow-xl hover:shadow-gray-500  transition-all ' >
            {icon==='FaPizzaSlice' && <FaPizzaSlice className=' text-7xl' /> }
            {icon==='FaHandPointRight' && <FaHandPointRight className=' text-7xl' /> }
            {icon==='FaMotorcycle' && <FaMotorcycle className=' text-7xl' /> }
            <p className=' text-center text-2xl font-bold' >{text}</p>
        </article>
    );
}

export default InfoItem;