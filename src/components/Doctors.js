import React from 'react'
import Modal from 'react-modal'

import Doctor from './Doctor'
import DoctorRow from './DoctorRow'

import './styles/doctors.css';
import './styles/doctor.css';

const Doctors = ({ doctors, showDoctor, doctor, orderByName, orderByNumber, selectDoctor, showDoctorslist }) => (
    <div className="container">
        <div className="toolbar">
            <button onClick={orderByName} className="button button-right">
                Sort by name <i className="fa fa-sort-alpha-asc"></i>
            </button>

            <button onClick={orderByNumber} className="button button-right">
                Sort by number <i className="fa fa-sort-numeric-asc"></i>
            </button>
        </div>
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