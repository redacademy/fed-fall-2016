import React from 'react'
import { Text, } from 'react-native'
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook'
import { withKnobs, select, } from '@kadira/storybook-addon-knobs'
import About from './index'

storiesOf('About', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const options = {
            Brandon: 'Brandon',
            Scott: 'Scott',
            Mack: 'Mack',
            tracy: 'TraceFace'
        }
        const defaultValue = 'TraceFace'
        const person =  select('Person', options, defaultValue)
        return <About person={person} />
    })