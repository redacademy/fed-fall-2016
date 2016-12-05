import React from 'react'
import { storiesOf, addDecorator } from '@kadira/react-native-storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import LocationHomeBottomButton from './index'
import {
    TouchableHighlight
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