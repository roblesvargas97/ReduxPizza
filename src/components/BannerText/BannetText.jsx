import React from 'react'

const BannetText = () => {
    return (
        <div className='flex flex-col items-center overflow-hidden w-full h-12 bg-red-500 '>
            {/* <h2 className=' font-bold text-5xl text-white text-center'>!El mejor </h2> */}
            <div className='letterA flex flex-col items-center w-full' >
                <span className=' font-bold text-5xl text-white'> Sabor </span>
                <span className=' font-bold text-5xl text-white'> Calidad </span>
                <span className=' font-bold text-5xl text-white'> Precio </span>
            </div>
        </div>
    );
}

export default BannetText;