import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-5">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-500'>Price: ${price}</p>
                <div className="card-actions flex justify-end">
                    <button className="btn bg-orange-600"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;