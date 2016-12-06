import { rgbColors } from '../../src/config/styles'

const colors = Object.keys(rgbColors).reduce((output, name) => {
    output[rgbColors[name]] = name
    return output
}, {})

export default colors
