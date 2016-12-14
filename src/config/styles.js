export const colors = {
    //--------------------------------------"pink"-ish
    beige: '#f8fbf4',
    blush: '#f17979',
    lightMauve: '#c597bd',
    apricot: '#ffc674',
    salmon: '#ff8b6c',
    darkPeach: '#e77474',
    //--------------------------------------"grey"-ish
    greyish: '#acacac',
    lightGrey: '#cacaca',
    warmGrey: '#7f7f7f',
    warmGreyTwo: '#969696',
    warmGreyThree: '#7f7e7e',
    //--------------------------------------"blue"-ish
    darkGreyBlue: '#2d4c60',
    metallicBlue: '#3f6376',
    //--------------------------------------"green"-ish
    lightGreyGreen: '#bfd899',
    lightGreyGreenTwo: '#cbe6a2',
    //--------------------------------------"white"-ish
    white: '#ffffff',
    whiteTwo: '#fdfdfd',
    whiteThree: '#f8f8f8',
}
/*
import { colors, padding, shadows, buttonSize, textStyles } from '../../config/styles'

        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
*/
export const shadows = {
    opacity: 0.6,
    offset: { width: 1, height: 2 },
    radius: 3,
}
export const padding = {
    deviceTop: 30,
    deviceRight: 20,
    deviceBottom: 20,
    deviceLeft: 20,
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
}

export const buttonSize = {
    optionBar: 50,
    searchBar: 50,
    listFilter: 42,
}
//internal, for use 
const fonts = {
    itimRegular: 'Itim-Regular',
    rubikLight: 'Rubik-Light',
    rubikRegular: 'Rubik-Regular',
    rubikMedium: 'Rubik-Medium',
}

const fontSize = {
    oneHundredTwentyFivePoint: {
        pt: 125,
        pixel: 167,
        em: 10.438,
    },
    oneHundredPoint: {
        pt: 100,
        pixel: 133,
        em: 8.313,
    },
    twentyFourPoint: {
        pt: 24,
        pixel: 32,
        em: 2,
    },
    twentyTwoPointFivePoint: {
        pt: 22.5,
        pixel: 30,
        em: 1.875,
    },
    fifteenPoint: {
        pt: 15,
        pixel: 21,
        em: 1.3,
    },
    fourteenPoint: {
        pt: 14,
        pixel: 19,
        em: 1.2,
    },
    twelvePoint: {
        pt: 12,
        pixel: 16,
        em: 1,
    },
}

export const textStyles = {
    textStyle: {
        fontFamily: fonts.itimRegular,
        fontSize: fontSize.oneHundredPoint.pixel,
        color: colors.white,
    },
    textStyle2: {
        fontFamily: fonts.itimRegular,
        fontSize: fontSize.oneHundredTwentyFivePoint.pixel,
        color: colors.darkPeach,
    },
    textStyle3: {
        fontFamily: fonts.rubikLight,
        fontSize: 23,
        color: colors.warmGrey,
    },
    textStyle4: {
        fontFamily: fonts.rubikRegular,
        fontSize: 23,
        color: colors.white,
    },
    textStyle5: {
        fontFamily: fonts.rubikRegular,
        fontSize: 14,
        color: colors.darkPeach,
    },
    textStyle6: {
        fontFamily: fonts.rubikLight,
        fontSize: 23,
        color: colors.metallicBlue,
    },
    textStyle7: {
        fontFamily: fonts.rubikRegular,
        fontSize: 14,
        color: colors.warmGrey,
    },
    textStyle8: {   // same as textStyle7
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        color: colors.warmGrey,
    },
    textStyle9: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyFourPoint.pixel,
        color: colors.warmGreyTwo,
    },
    textStyle10: {
        fontFamily: fonts.rubikRegular,
        fontSize: 9,
        color: colors.warmGreyThree,
    },
    textStyle11: {
        fontFamily: fonts.rubikRegular,
        fontSize: 9,
        color: colors.warmGrey,
    },
    textStyle12: {
        fontFamily: fonts.rubikRegular,
        fontSize: 9,
        color: colors.darkPeach,
    },
    textStyle13: {
        fontFamily: fonts.rubikLight,
        fontSize: 23,
        color: colors.warmGreyTwo,
    },
    textStyle14: {  //same as textStyle6
        fontFamily: fonts.rubikLight,
        fontSize: 23,
        color: colors.metallicBlue,
    },
    textStyle15: {
        fontFamily: fonts.rubikRegular,
        fontSize: 9,
        color: colors.greyish,
    },
    textStyle16: {
        fontFamily: fonts.rubikLight,
        fontSize: 19,
        color: colors.darkGreyBlue,
    },
    textStyle17: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twelvePoint.pixel,
        color: colors.warmGrey,
    },
    textStyle18: {  //same as textStyle17
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twelvePoint.pixel,
        color: colors.warmGrey,
    },
    textStyle19: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colors.warmGrey,
    },
    textStyle20: {
        fontFamily: fonts.rubikLight,
        fontSize: 9,
        color: colors.warmGrey,
    },
    textStyle21: {  //same as textStyle19
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colors.warmGrey,
    },
    textStyle22: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyTwoPointFivePoint.pixel,
        color: colors.beige,
    },
    textStyle23: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyTwoPointFivePoint.pixel,
        color: colors.lightGreyGreen,
    },
    textStyle24: {
        fontFamily: fonts.rubikMedium,
        fontSize: 9,
        color: colors.darkGreyBlue,
    },
    textStyle25: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colors.white,
    },
    textStyle26: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colors.warmGreyTwo,
    },
    textStyle27: {
        fontFamily: fonts.rubikMedium,
        fontSize: fontSize.fifteenPoint.pixel,
        color: colors.darkGreyBlue,
    },
    textStyle28: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.twelvePoint.pixel,
        color: colors.warmGrey,
    },
    textStyle29: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyFourPoint.pixel,
        color: colors.warmGrey,
    },
    textStyle30: {
        fontFamily: fonts.rubikLight,
        fontSize: 14,
        color: colors.warmGreyTwo,
    },
    textStyle31: {
        fontFamily: fonts.rubikLight,
        fontSize: 23,
        color: colors.warmGrey,
    },
}