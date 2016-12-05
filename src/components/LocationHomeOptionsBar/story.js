import React from 'react'
import { storiesOf, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import LocationHomeOptionsBar from './index'
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'

storiesOf('LocationHomeOptionsBar', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('Default', () => {
        return <LocationHomeOptionsBar>
            <TouchableHighlight  style={styles.box} onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>R
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.box} onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>A
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.box} onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>P
                        </Text>
                    </View>
                </TouchableHighlight>
        </LocationHomeOptionsBar>
    })