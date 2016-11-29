import React from 'react'
import { storiesOf, action, linkTo, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs, select, } from '@kadira/storybook-addon-knobs'
import LocationHomeBottomButton from './index'
import {
    View,
    Image,
    TouchableHighlight,
    Text,
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'
import BottomButtonListButton from '../BottomButtonListButton'
import BottomButtonFilterButton from '../BottomButtonFilterButton'


storiesOf('LocationHomeBottomButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('FilterSearchButton', () => {
        return <LocationHomeBottomButton>
            <TouchableHighlight  style={styles.box} onPress={this._onPressButton}>
                   <BottomButtonListButton />
                   <BottomButtonFilterButton />
                </TouchableHighlight>
        </LocationHomeBottomButton>
    })