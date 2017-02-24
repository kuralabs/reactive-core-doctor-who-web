import React from 'react'
import Modal from 'react-modal'

import Doctor from './Doctor'
import DoctorRow from './DoctorRow'

import './styles/doctors.css';
import './styles/doctor.css';

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
        <Modal isOpen={showDoctor}
            overlayClassName="modal-overlay"
            className="modal"
            contentLabel="Doctor"
        >
            <Doctor
                doctor={doctor}
                closeModal={showDoctorslist}
            />
        </Modal>
    </div>
)

export default Doctors