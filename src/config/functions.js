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


// babyFocusIconChooser will return the icon type to use based on 
export const babyFocusIconChooser = (amenities) => {
    if (amenities.changeTable && amenities.nursingRoom) {
        return 'starbaby-face'
    }
    if (amenities.changeTable) {
        return 'diaper'
    }
    return 'bottle'
}

export const mapPinColorChooser = (amenities) => {
    if (amenities.changeTable && amenities.nursingRoom) {
        return colors.lightMauve
    }
    if (amenities.changeTable) {
        return colors.darkPeach
    }
    return colors.darkGreyBlue
}

export const ratingSummaryCalculator = (input) => {
  const quality = input.quality / input.totalRaters
  const clean = input.clean / input.totalRaters
  const nursing = input.nursing / input.totalRaters
  const quiet = input.quiet / input.totalRaters
  
  return {quality: quality, clean: clean, nursing: nursing, quiet: quiet} 
}

export const mongoFilter = (arrayToFilter, googlePlaceId) => arrayToFilter.filter((pin) => {
    if (pin.obj.placeId === googlePlaceId) {
        return pin
    }
})
