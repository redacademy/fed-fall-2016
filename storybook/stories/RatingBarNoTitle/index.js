import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, select, number } from '@kadira/storybook-addon-knobs'
import RatingBarNoTitle from '../../../src/components/RatingBarNoTitle'
// import colorsArray from '../../utils/colors'
// import iconNames from '../../utils/icons'
import CenterContainer from '../../decorators/center'
import { WithNotes } from '@kadira/storybook-addon-notes'
// import { colors } from '../../../src/config/styles'

storiesOf('RatingBarNoTitle', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('RatingBarNoTitle', () => {

        const ratingChoices = ['LOW', 'MEDIUM', 'HIGH']

        const qualityVal = select('Quality Rating', ratingChoices, 'HIGH')
        const cleanlinessVal = select('Cleanliness Rating', ratingChoices, 'MEDIUM')
        const nursingVal = select('Nursing Rating', ratingChoices, 'LOW')
        const quietVal = select('Quiet Rating', ratingChoices, 'MEDIUM')



        const story = <RatingBarNoTitle
            ratings={{
                quality: qualityVal,
                clean: cleanlinessVal,
                nursing: nursingVal,
                quiet: quietVal,
            }}
            width={300}
            />

        return (
            <WithNotes
                notes={
                    `Example Usage:


                <b>&lt;RatingBarNoTitle
                    &nbsp;&nbsp;&nbsp; ratings={{
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; quality: 'HIGH',
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; clean: 'MEDIUM',
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; nursing: 'LOW',
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; quiet: 'MEDIUM',
                    }}
                    /></b>

                    You will need to pass the prop <b>ratings</b> in. It will be an object with keys of:
                    <ul>
                    <li>quality</li><li>clean</li><li>nursing</li><li>quiet</li>
                    </ul>
                    They will each have to say either <b>LOW</b>, <b>MEDIUM</b>, xor <b>HIGH</b>
                <h2>PropTypes (scroll down, sorry)</h2>
                 <table style="padding: 0; border-collapse: collapse; text-align: center; width: 100%">
                    <tr>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     property</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     propType</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     required</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     default</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     quality</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     object</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     yes</td>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     none</td>
                    </tr>
                    </table>    
                    <h2>END</h2>            
                `
                }>
                <View>
                    {story}
                </View>
            </WithNotes>
        )
    })
