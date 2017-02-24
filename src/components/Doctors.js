import React from 'react'

import DoctorRow from './DoctorRow'

import './styles/doctors.css';

const Doctors = ({ doctors, showDoctor, doctor, orderByName, orderByNumber, selectDoctor, showDoctorslist }) => (
    <div className="container">
        <ul>
            {doctors.map(d =>
                <DoctorRow
                    key={d.doctorNumber}
                    doctor={d}
                    onClick={() => selectDoctor(d)}
                />
            )}
        </ul>
    </div>
)

export default Doctors