import React from 'react'
import { storiesOf, action, linkTo, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs, select, } from '@kadira/storybook-addon-knobs'
import OptionsBarButton from './index'
import {
    View,
    Image,
    TouchableHighlight,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'
import Icon from '../Icon/index'


storiesOf('OptionsBarButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('RefreshLocation', () => {
        return <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Icon style={styles.icon} name="location" size={60} color="lightgrey" />
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    })
    .add('AddLocation', () => {
        return <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Icon style={styles.icon} name="add" size={60} color="lightgrey" />
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    })
    .add('Profile', () => {
        return <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Icon style={styles.icon} name="history" size={60} color="lightgrey" />
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    })