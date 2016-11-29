import React, { Component, } from 'react'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation'
import { Router } from './routes.js'
import { styles } from './styles.js'

// // import Octicons from 'react-native-vector-icons/Octicons'
// const iconSize = 24

// const renderIcon = (isSelected, iconName, size) => {
//   return (
//     <Octicons name={iconName} size={size} color={isSelected ? 'black' : '#999999'} />
//   )
// }

// Treat the NavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
      backgroundColor: 'white',
      titleStyle: styles.header,
    }
  }
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about">
        <TabItem
          id="about"
          title="About"
          // renderIcon={(isSelected) => renderIcon(isSelected, "info", iconSize)}/
          >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
            />
        </TabItem>
        <TabItem
          id="home"
          title="Home"
          // renderIcon={(isSelected) => renderIcon(isSelected, "info", iconSize)}/
          >
          <StackNavigation
            id="home"
            initialRoute={Router.getRoute('home')}
            />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;