import React from 'react'

import './styles/doctor.css'

const DoctorRow = ({ closeModal, doctor }) => (
    <div>
        <div className="button-wrapper">
            <button onClick={closeModal} className="button-right">
                <i className="fa fa-close"></i>
            </button>
        </div>

        <div className="header-wrapper">
            <span className="header">#{doctor.doctorNumber}</span>
            <img className="header-img"src={doctor.image} alt={doctor.actor}/>
        </div>


        <p className="text">{doctor.description}</p>
        <p className="title">Who Played Him:</p>
        <p className="text">{doctor.actor}</p>
        <p className="title">When:</p>
        <p className="text">{doctor.when}</p>
        <p className="title">Memorable Gadget/Item of Clothing:</p>
        <p className="text">{doctor.gadget}</p>
        <p className="title">Reason for Regeneration:</p>
        <p className="text">{doctor.regeneration}</p>
        <p className="title">Three Recommended Stories:</p>
        <p className="text">{doctor.stories}</p>
    </div>
)

export default DoctorRow