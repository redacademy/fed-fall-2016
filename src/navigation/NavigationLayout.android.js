import React, { Component } from 'react'
import styles from './styles.js'

import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@exponent/ex-navigation'

import {
    View,
    Text,
} from 'react-native'
import { Router } from './routes.js'
const iconSize = 48

/**
 * NavigationLayout
 * 
 * Treat the DrawerNavigationLayout route like any other route -- you may want to set
 * it as the initial route for a top-level StackNavigation
 */
class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false,
            backgroundColor: 'white',
            fontSize: 24,
        },
    }
    _renderHeader = () => {
        return (
            <View style={styles.header}>
            </View>
        )
    }

    _renderTitle(text, isSelected, iconName, size) {
        return (
            <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
                {text}
            </Text>
        )
    }
    render() {
        return (
            <DrawerNavigation
                id='main'
                initialItem='home'
                drawerWidth={300}
                renderHeader={this._renderHeader}
                >
                <DrawerNavigationItem
                    id='about'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('About', isSelected, "info", iconSize)}
                    >
                    <StackNavigation
                        id='about'
                        initialRoute={Router.getRoute('about')}
                        />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id='home'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Home', isSelected, "info", iconSize)}
                    >
                    <StackNavigation
                        id='home'
                        initialRoute={Router.getRoute('home')}
                        />
                </DrawerNavigationItem>
            </DrawerNavigation>
        )
    }
}

export default NavigationLayout
