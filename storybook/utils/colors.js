import { colors } from '../../src/config/styles'

const colorsArray = Object.keys(colors).reduce((output, name) => {
    output[colors[name]] = name
    return output
}, {})

export default colorsArray
