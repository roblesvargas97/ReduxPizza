import React from 'react'
import PizzaCarousel from '../../components/PizzaCarousel/PizzaCarousel';
import PointsOrnament from '../../components/PointsOrnament/PointsOrnament';
import SwirlOrnament from '../../components/SwirlOrnament/SwirlOrnament';

const PizzaMenu = () => {
    return (
        <div className=' h-[85vh] relative overflow-hidden p-5 bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1' >
            <SwirlOrnament styles=" hidden lg:block absolute top-[-50%] left-[-20%] " />
            <PointsOrnament styles=" hidden lg:block absolute bottom-0 left-0 "/>
            <h2 className=' text-4xl font-bold text-white text-center ' >Nuestro Menu</h2>
            <PizzaCarousel/>
        </div>
    );
}

export default PizzaMenu;