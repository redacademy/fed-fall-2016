import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import LocationHomeMapPin from './index'
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import styles from './styles'

storiesOf('LocationHomeMapPin', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('MapPin', () => {
        return <LocationHomeMapPin>
            <TouchableOpacity style={styles.box} onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.icon}>
                    </Text>
                </View>
            </TouchableOpacity>
        </LocationHomeMapPin>
    })