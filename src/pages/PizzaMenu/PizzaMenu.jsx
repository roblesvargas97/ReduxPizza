import React from 'react'
import PointsOrnament from '../../components/PointsOrnament/PointsOrnament';
import SwirlOrnament from '../../components/SwirlOrnament/SwirlOrnament';

const PizzaMenu = () => {
    return (
        <div className=' h-[85vh] relative overflow-hidden bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1' >
            <SwirlOrnament styles=" hidden lg:block absolute top-[-50%] left-[-20%] " />
            <PointsOrnament styles=" hidden lg:block absolute bottom-0 left-0 "/>
        </div>
    );
}

export default PizzaMenu;