import React from 'react'

const DoctorRow = ({ onClick, doctor }) => (
    <li
        onClick={onClick}
    >
        <img src={doctor.image} alt={doctor.actor}/>
        {doctor.actor}

    </li>
)

export default DoctorRow