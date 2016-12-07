import React from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, select, boolean, number } from '@kadira/storybook-addon-knobs'
import IconOptionalTitle from '../../../src/icons/IconOptionalTitle'
import colors from '../../utils/colors'
import iconNames from '../../utils/icons'
import CenterContainer from '../../decorators/center'
import { WithNotes } from '@kadira/storybook-addon-notes'

storiesOf('IconButtons', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('OptionalTitle', () => {
        const colorVal = select('Colors', colors, 'apricot')
        const iconNameVal = select('Icons', iconNames, 'add')
        const noTitle = boolean('No Title', false)
        const sizeOptions = {
            range: true,
            min: 20,
            max: 500,
            step: 10,
        }
        const sizeVal = number('Size', 60, sizeOptions)

        const story = <IconOptionalTitle
            size={sizeVal}
            iconColor={colorVal}
            iconName={iconNameVal}
            noTitle={noTitle}
            />

        return (
            <WithNotes
                notes={`Usage:\n\n<b>&lt;IconOptionalTitle \n\
                &nbsp;&nbsp;&nbsp; size={${sizeVal}}\n\
                &nbsp;&nbsp;&nbsp; iconColor={${colorVal}}\n\
                &nbsp;&nbsp;&nbsp; iconName={${iconNameVal}}\n\
                &nbsp;&nbsp;&nbsp; noTitle={${noTitle}}\n\
                /></b>`
                }>
                {story}
            </WithNotes>
        )
    })
    