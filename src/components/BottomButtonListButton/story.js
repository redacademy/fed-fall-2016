import React from 'react'
import { storiesOf, action, linkTo, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs, select, } from '@kadira/storybook-addon-knobs'
import BottomButtonListButton from './index'
import {
    View,
    Image,
    TouchableHighlight,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'


storiesOf('ListButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('ListText', () => {
        return <BottomButtonListButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>Filter</Text>
                </View>
            </TouchableHighlight>
        </BottomButtonListButton>
    })
    .add('List', () => {
        return <BottomButtonListButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>F</Text>
                </View>
            </TouchableHighlight>
        </BottomButtonListButton>
    })