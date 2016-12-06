import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import BottomButtonListButton from './index'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import styles from './styles'

storiesOf('ListButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('ListText', () => (
        <BottomButtonListButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>Filter</Text>
                </View>
            </TouchableHighlight>
        </BottomButtonListButton>
    ))
    .add('List', () => (
        <BottomButtonListButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>F</Text>
                </View>
            </TouchableHighlight>
        </BottomButtonListButton>
    ))
