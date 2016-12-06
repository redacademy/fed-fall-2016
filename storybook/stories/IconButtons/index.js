import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, select, boolean, number } from '@kadira/storybook-addon-knobs'
import IconOptionalTitle from '../../../src/icons/IconOptionalTitle'
import colors from '../../utils/colors'
import iconNames from '../../utils/icons'
import CenterContainer from '../../decorators/center'

storiesOf('IconButtons', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('OptionalTitle', () => {
        const colorVal = select('Colors', colors, 'apricot')
        const iconNameVal = select('Icons', iconNames, 'add')
        const noTitle = boolean('No Title', false)
        const sizeOptions = {
            range: true,
            min: 10,
            max: 300,
            step: 10,
        }
        const sizeVal = number('Size', 60, sizeOptions)

        const story = <IconOptionalTitle
            size={sizeVal}
            iconColor={colorVal}
            iconName={iconNameVal}
            noTitle={noTitle}
            />

        return story
    })