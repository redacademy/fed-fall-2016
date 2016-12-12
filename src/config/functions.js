// A file of reusable functions for the project
import { colors } from '../config/styles'

export const ratingColorGenerator = (rating) => {
    const parsedRating = parseFloat(rating)
    switch (true) {
        case (parsedRating < 1.666):
            return colors.salmon
        case (parsedRating < 2.333):
            return colors.apricot
        default:
            return colors.lightGreyGreenTwo
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
