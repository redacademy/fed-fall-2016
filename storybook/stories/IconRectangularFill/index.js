import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, select, number } from '@kadira/storybook-addon-knobs'
import IconRectangularFill from '../../../src/icons/IconRectangularFill'
import colorsArray from '../../utils/colors'
import iconNames from '../../utils/icons'
import CenterContainer from '../../decorators/center'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { colors } from '../../../src/config/styles'

storiesOf('IconRectangularFill', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('IconRectangularFill', () => {
        const fillColorVal = select('Fill Color', colorsArray, colors.blush)
        const colorVal = select('Colors', colorsArray, colors.whiteTwo)
        const iconNameVal = select('Icons', iconNames, 'add')
        const sizeVal = number('Size', 60, {
            range: true,
            min: 20,
            max: 500,
            step: 10,
        })

        const story = <IconRectangularFill
            size={sizeVal}
            color={colorVal}
            fillColor={fillColorVal}
            name={iconNameVal}
            />

        return (
            <WithNotes
                notes={`Example Usage:


                    <b>&lt;IconRectangularFill
                &nbsp;&nbsp;&nbsp; size={60}
                &nbsp;&nbsp;&nbsp; color={colors.whiteTwo}
                &nbsp;&nbsp;&nbsp; fillColor={colors.darkPeach}
                &nbsp;&nbsp;&nbsp; name='breast-feeding'
                /></b>
                <h2>PropTypes (scroll down, sorry)</h2>
                 <table style="padding: 0; border-collapse: collapse; text-align: center; width: 100%">
                    <tr>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     property</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     propType</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     required</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     default</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     size</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     number</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     yes</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     none</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     name</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     string</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     yes</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     none</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     color</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     string\n (rgb, hex, or name)</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     no</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     colors.whiteTwo</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     fillColor</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     string\n (rgb, hex, or name)</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     no</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     colors.blush</td>
                    </tr>
                    </table>    
                    <h2>END</h2>            
                `
                }>
                {story}
            </WithNotes>
        )
    })
