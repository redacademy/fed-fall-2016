import React from 'react'
import { storiesOf, action, linkTo, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs, select, } from '@kadira/storybook-addon-knobs'
import LocationHomeMapPin from './index'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'

storiesOf('LocationHomeMapPin', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('MapPin', () => {
        return <LocationHomeMapPin>
            <TouchableOpacity  style={styles.box} onPress={this._onPressButton}>
                <View style={styles.button}>
                        <Text style={styles.icon}>
                        </Text>
                    </View>
            </TouchableOpacity>
        </LocationHomeMapPin>
    })