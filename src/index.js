import React, { Component, } from 'react'
import { Provider } from 'react-redux'
import Router from './routes'
import store from './redux/store'

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
