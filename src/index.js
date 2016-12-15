import React, { Component, } from 'react'
import { Provider } from 'react-redux'
import Router from './routes'
import store from './redux/store'
global.___DEV___ = false // turns off the error screens

// default navigation: vertical
export default class ChangedAndFed extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
