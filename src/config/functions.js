// A file of reusable functions for the project
import { rgbColors } from '../config/styles'

export const ratingColorGenerator = (rating) => {
    switch (rating.toUpperCase()) {
        case 'LOW':
            return rgbColors.salmon
        case 'MEDIUM':
            return rgbColors.apricot
        case 'HIGH':
            return rgbColors.lightGreyGreenTwo
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
