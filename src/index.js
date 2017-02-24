import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import doctorsApp from './core-module/reducers'
import DoctorsList from './containers/DoctorsList'

let store = createStore(doctorsApp)

render(
    <Provider store={store}>
        <DoctorsList/>
    </Provider>,
    document.getElementById('root')
)