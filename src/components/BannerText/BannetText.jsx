import React from 'react'

const BannetText = () => {
    return (

        <div className='flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 relative'>
            <h2 className='font-bold text-5xl w-full text-white'>!El Mejor</h2>
            <div className='flex flex-col items-center overflow-hidden w-full h-12  '>
                <div className=' animate-wordsAnimation flex flex-col items-center w-full' >
                    <span className=' font-bold text-5xl text-white'> Sabor¡ </span>
                    <span className=' font-bold text-5xl text-white'> Calidad¡ </span>
                    <span className=' font-bold text-5xl text-white'> Precio¡ </span>
                </div>
            </div>
        </div>
    );
}

export default BannetText;