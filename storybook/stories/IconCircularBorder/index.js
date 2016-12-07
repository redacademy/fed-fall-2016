import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, select, number } from '@kadira/storybook-addon-knobs'
import { WithNotes } from '@kadira/storybook-addon-notes'
import CenterContainer from '../../decorators/center'
import colors from '../../utils/colors'
import iconNames from '../../utils/icons'
import IconCircularBorder from '../../../src/icons/IconCircularBorder'
import { rgbColors } from '../../../src/config/styles'

storiesOf('IconCircularBorder', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('IconCircularBorder', () => {
        const colorVal = select('Colors', colors, rgbColors.darkPeach)
        const iconNameVal = select('Icons', iconNames, 'add')
        const sizeVal = number('Size', 60, {
            range: true,
            min: 20,
            max: 500,
            step: 10,
        })

        const story = <IconCircularBorder
            size={sizeVal}
            color={colorVal}
            name={iconNameVal}
            />

        return (
            <WithNotes
                notes={`Example Usage:


                    <b>&lt;IconCircularBorder
                &nbsp;&nbsp;&nbsp; size={60}
                &nbsp;&nbsp;&nbsp; color={rgbColors.whiteTwo}
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
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     rgbColors.darkPeach</td>
                    </tr>
                    </table>   
                    <h2>END</h2>             
                `
                }>
                {story}
            </WithNotes>
        )
    })
