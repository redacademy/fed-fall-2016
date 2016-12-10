import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import BottomButton from './index'
import {
    TouchableHighlight
} from 'react-native'
import CenterDecorator from '../../../storybook/decorators/center.js'
import { styles } from './styles'
import BottomButtonListButton from '../BottomButtonListButton'
import BottomButtonFilterButton from '../BottomButtonFilterButton'

storiesOf('BottomButton', module)
    .addDecorator(CenterDecorator)
    .addDecorator(withKnobs)
    .add('FilterSearchButton', () => {
        return <BottomButton>
            <TouchableHighlight style={styles.box} onPress={this._onPressButton}>
                <BottomButtonListButton />
                <BottomButtonFilterButton />
            </TouchableHighlight>
        </BottomButton>
    })