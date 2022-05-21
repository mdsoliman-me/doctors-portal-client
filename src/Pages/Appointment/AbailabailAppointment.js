import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentServicecCard from './AppointmentServicecCard';

const AbailabailAppointment = ({ date }) => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('appoientmentService.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-secondary'>Available Services on {format(date, 'PP')}</h1>
                <p>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    service.map(servic => <AppointmentServicecCard service={servic}></AppointmentServicecCard>)
                }
            </div>
        </div>
    );
};

export default AbailabailAppointment;