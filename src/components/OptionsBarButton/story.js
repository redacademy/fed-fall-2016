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


storiesOf('OptionsBarButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('RefreshLocation', () => {
        return <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>R</Text>
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    })
    .add('AddLocation', () => {
        return <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>A</Text>
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    })
    .add('Profile', () => {
        return <OptionsBarButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>P</Text>
                </View>
            </TouchableHighlight>
        </OptionsBarButton>
    })