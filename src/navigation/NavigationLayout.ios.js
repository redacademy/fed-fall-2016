import React, { Component, } from 'react'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation'
import { Router } from './routes.js'
import styles from './styles.js'

// Treat the NavigationLayout route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
      backgroundColor: 'white',
      titleStyle: styles.header,
    },
  }
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home">
        <TabItem
          id="about"
          title="About"
          >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
            />
        </TabItem>
        <TabItem
          id="home"
          title="Home"
          >
          <StackNavigation
            id="home"
            initialRoute={Router.getRoute('home')}
            />
        </TabItem>
      </TabNavigation>
    )
  }
}

export default NavigationLayout