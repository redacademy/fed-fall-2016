import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import OptionsBarButton from './index'
import {
    View,
    TouchableHighlight
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import styles from './styles'
import Icon from '../Icon/index'

storiesOf('OptionsBarButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('RefreshLocation', () => (
        <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Icon style={styles.icon} name='location' size={60} color='lightgrey' />
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    ))
    .add('AddLocation', () => (
        <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Icon style={styles.icon} name='add' size={60} color='lightgrey' />
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    ))
    .add('Profile', () => (<OptionsBarButton>
        <TouchableHighlight style={styles.box} onPress={() => { } }>
            <View style={styles.button}>
                <Icon style={styles.icon} name='history' size={60} color='lightgrey' />
            </View>
        </TouchableHighlight>
    </OptionsBarButton>
    ))
