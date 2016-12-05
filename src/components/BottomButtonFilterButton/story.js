import React from 'react'
import { storiesOf, action, linkTo, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs, select, } from '@kadira/storybook-addon-knobs'
import BottomButtonFilterButton from './index'
import {
    View,
    Image,
    TouchableHighlight,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'


storiesOf('FilterButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('FilterText', () => {
        return <BottomButtonFilterButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>List</Text>
                </View>
            </TouchableHighlight>
        </BottomButtonFilterButton>
    })
    .add('Filter', () => {
        return <BottomButtonFilterButton>
            <TouchableHighlight style={styles.box} onPress={() => { } }>
                <View style={styles.button}>
                    <Text style={styles.icon}>L</Text>
                </View>
            </TouchableHighlight>
        </BottomButtonFilterButton>
    })
