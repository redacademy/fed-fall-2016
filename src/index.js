import React, { Component, } from 'react'
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'

import { Router, } from './navigation/routes.js'


/*
default navigation: vertical
*/
export default class ChangedAndFed extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('navigationLayout')} id="mainStack" />
      </NavigationProvider>
    )
  }
}
