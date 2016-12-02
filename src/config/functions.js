// A file of reusable functions for the project
import { hexColors } from '../config/styles'

export const ratingColorGenerator = (rating) => {
    switch (rating.toUpperCase()) {
        case 'LOW':
            return hexColors.salmon
        case 'MEDIUM':
            return hexColors.apricot
        case 'HIGH':
            return hexColors.lightGreyGreenTwo
        default:
            break
    }
}
