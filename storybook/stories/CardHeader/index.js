import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@kadira/react-native-storybook'
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs'
import { WithNotes } from '@kadira/storybook-addon-notes'
import CenterContainer from '../../decorators/center'
import CardHeader from '../../../src/components/CardHeader'

storiesOf('CardHeader', module)
    .addDecorator(withKnobs)
    .addDecorator(CenterContainer)
    .add('CardHeader', () => {
        const changingVal = boolean('Changing', false)
        const feedingVal = boolean('Feeding', false)
        const alreadyRatedVal = boolean('Already Rated', false)
        const alreadyFavedVal = boolean('Already Faved', false)


        const story = <CardHeader
            changing={changingVal}
            feeding={feedingVal}
            alreadyRated={alreadyRatedVal}
            alreadyFaved={alreadyFavedVal}
            width={400}
            />

        return (
            <WithNotes
                notes={
                    `<h3>NOTE: space-between doesn't work in storybook for react-native, so it's funny looking here because there won't be a space, but don't worry: there will be in the app</h3>
                    Example Usage:


                    <b>&lt;CardHeader
                    &nbsp;&nbsp;&nbsp; changing={false}
                    &nbsp;&nbsp;&nbsp; feeding
                    &nbsp;&nbsp;&nbsp; alreadyRated={false}
                    &nbsp;&nbsp;&nbsp; alreadyFaved
                    /></b>

                    You will need to pass the optional props <b>changing</b> <b>feeding</b> <b>alreadyRated</b> <b>alreadyFaved</b> in. They are all just booleans, which is lovely
                    <h2>PropTypes (scroll down, sorry)</h2>
                    <table style="padding: 0; border-collapse: collapse; text-align: center; width: 100%">
                        <tr>
                            <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     property</th>
                            <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     propType</th>
                            <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     required</th>
                            <th style="border: 1px solid black; border-collapse: collapse; text-align: center">     default</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     changing</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     bool</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     no</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     false (not present)</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     feeding</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     bool</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     no</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     false (not present)</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     alreadyRated</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     bool</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     no</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     false (not present)</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     alreadyFaved</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     bool</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     no</td>
                            <td style="border: 1px solid black; border-collapse: collapse; text-align: center">     false (not present)</td>
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
