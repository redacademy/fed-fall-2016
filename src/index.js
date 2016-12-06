import React, { Component, } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'

import LocationHome from '../src/containers/LocationHome'

// default navigation: vertical
export default class ChangedAndFed extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LocationHome />
      </Provider>
    )
  }
}
