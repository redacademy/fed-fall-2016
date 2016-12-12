import React, { Component, } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import LocationHome from '../src/containers/LocationHome'

// default navigation: vertical
export default class ChangedAndFed extends Component {
    render() {
        return (
            <Provider store={store}>
                <LocationHome />
            </Provider>
        )
    }
}
