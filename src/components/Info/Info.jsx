import React from 'react';
import InfoItem from '../InfoItem/InfoItem';

const Info = () => {

    const infoArray = [
        {
            icon:  'FaPizzaSlice',
            text: 'Escoge tu pizza o arma tu pizza.'
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
        <div className=" w-full min-h-[45vh] flex flex-col p-5 bg-white space-y-5 ">
            {infoArray.map((element , index) => <InfoItem key={index} icon={element.icon} text={element.text} />)}
        </div>
    );
}

export default Info;