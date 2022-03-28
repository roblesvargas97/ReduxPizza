import React from 'react';
import BannetText from '../BannerText/BannetText';
import CircleOrnamentLeft from '../CircleOrnamentLeft/CircleOrnamentLeft';
import CircleOrnamentRight from '../CircleOrnamentRight/CircleOrnamentRight';

const BannerHero = () => {
    return (
        <div className="w-full h-[40vh] mt-[15vh] md:h-[50vh] lg:h-[40vh] overflow-hidden bg-pizza-background bg-cover relative ">
            <div className='w-full h-full flex flex-col justify-center items-center absolute bg-gradient-to-r from-dark-blue/80 via-dark-blue/80 to-dark-blue-1/80 '>
                <BannetText/>
            </div>
            <CircleOrnamentLeft/>
            <CircleOrnamentRight/>
        </div>
    );
}

export default BannerHero;