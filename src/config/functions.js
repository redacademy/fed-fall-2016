// A file of reusable functions for the project
import { colors } from '../config/styles'

export const ratingColorGenerator = (rating) => {
    switch (rating.toUpperCase()) {
        case 'LOW':
            return colors.salmon
        case 'MEDIUM':
            return colors.apricot
        case 'HIGH':
            return colors.lightGreyGreenTwo
        default:
            break
    }
}

export const babyFocusIconChooser = (changing, feeding) => {
    if (changing && feeding) {
        return 'starbaby-face'
    }
    if (changing) {
        return 'diaper'
    }
    return 'bottle'
}
