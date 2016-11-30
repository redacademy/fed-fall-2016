import React, { Component, } from 'react'
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'

import { Router } from './navigation/routes.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'

/*
default navigation: vertical
*/
export default class ChangedAndFed extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('navigationLayout')} id="mainStack" />
        </NavigationProvider>
      </Provider>
    )
  }
}
