import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { orderByName, orderByNumber, selectDoctor, showDoctorslist } from '../core-module/actions'
import Doctors from '../components/Doctors'

const mapStateToProps = (state) => {
    let doctors = state.doctors.doctors;

    return {
        doctors: doctors,
        showDoctor: state.doctors.showDoctor,
        doctor: state.doctors.doctor
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        orderByName,
        orderByNumber,
        selectDoctor,
        showDoctorslist
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);