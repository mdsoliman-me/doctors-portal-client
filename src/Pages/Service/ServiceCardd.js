import React from 'react';

const ServiceCardd = ({ datas }) => {
    const { img, title, discriptione, } = datas
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{discriptione}</p>
                
            </div>
        </div>
    );
};

export default ServiceCardd;