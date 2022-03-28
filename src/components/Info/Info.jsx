import React from 'react';
import InfoItem from '../InfoItem/InfoItem';

const Info = () => {

    const infoArray = [
        {
            icon:  'FaPizzaSlice',
            text: 'Escoge o arma tu pizza.'
        },
        {
            icon:  'FaHandPointRight',
            text: 'Ordena los detalles de tu pedido.'
        },
        {
            icon:  'FaMotorcycle',
            text: 'Ordena los detalles de tu pedido.'
        }
    ];

    return (
        <div className=" w-full min-h-[45vh] md:min-h-[35vh] lg:min-h-[45vh] flex flex-col p-5 md:flex-row bg-white space-y-5 lg:p-10 md:justify-center md:items-center md:space-x-5 md:space-y-0 ">
            {infoArray.map((element , index) => <InfoItem key={index} icon={element.icon} text={element.text} />)}
        </div>
    );
}

export default Info;