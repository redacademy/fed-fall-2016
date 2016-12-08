import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs'
import { WithNotes } from '@kadira/storybook-addon-notes'
import CenterContainer from '../../decorators/center'
import AmenitiesBarNoTitle from '../../../src/components/AmenitiesBarNoTitle'

storiesOf('AmenitiesBarNoTitle', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('AmenitiesBarNoTitle', () => {
        const privacyVal = boolean('Privacy', true)
        const changeTableVal = boolean('Change Table', false)
        const familyWashroomVal = boolean('Family Washroom', true)
        const requiresKeyVal = boolean('Requires Key', false)
        const strollerAccessibleVal = boolean('Stroller Accessible', true)
        const maleVal = boolean('Men\'s Washroom', false)
        const femaleVal = boolean('Women\'s Washroom', false)

        const story = <AmenitiesBarNoTitle
            amenities={{
                privacy: privacyVal,
                changeTable: changeTableVal,
                familyWashroom: familyWashroomVal,
                washroomGender: [(maleVal ? 'men' : null), femaleVal ? 'women' : null],
                requiresKey: requiresKeyVal,
                strollerAccessible: strollerAccessibleVal,
            }}
            width={300}
            />

        return (
            <WithNotes
                notes={
                    `Example Usage:


                <b>&lt;AmenitiesBarNoTitle
                    &nbsp;&nbsp;&nbsp; amenities={{
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; privacy: privacyVal,
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; changeTable: changeTableVal,
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; familyWashroom: familyWashroomVal,
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; washroomGender: ['men', 'women'],
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; requiresKey: requiresKeyVal,
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; strollerAccessible: strollerAccessibleVal,
                    &nbsp;&nbsp;&nbsp; }}
                    /></b>

                    You will need to pass the prop <b>amenities</b> in. It will be an object with keys of:
                    <ul>
                    <li>privacy</li><li>changeTable</li><li>familyWashroom</li><li>washroomGender (an array)</li><li>requiresKey</li><li>strollerAccessible</li>
                    </ul>

                    They are all optional, but will need to be set to true or false, with the exception of washroomGender, which will be an array
                <h2>PropTypes (scroll down, sorry)</h2>
                 <table style="padding: 0; border-collapse: collapse; text-align: center; width: 100%">
                    <tr>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     property</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     propType</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     required</th>
                        <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     default</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     amenities</td>
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
