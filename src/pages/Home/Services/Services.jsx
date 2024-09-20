import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='mt-4'>
            <div className='text-center space-y-3'>
                <h3 className='text-3xl text-orange-500'>Services</h3>
                <h2 className='text-5xl'>Our Services area</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which do not look even slightly believable. </p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;