export const colorPalette = {
    //--------------------------------------"pink"-ish
    beige: {
        rgb: 'rgb(248, 251, 244)',
        hex: '#f8fbf4',
    },
    blush: {
        rgb: 'rgb(241, 121, 121)',
        hex: '#f17979',
    },
    lightMauve: {
        rgb: 'rgb(197, 151, 189)',
        hex: '#c597bd',
    },
    apricot: {
        rgb: 'rgb(255, 198, 116)',
        hex: '#ffc674',
    },
    salmon: {
        rgb: 'rgb(255, 139, 108)',
        hex: '#ff8b6c',
    },
    darkPeach: {
        rgb: 'rgb(231, 116, 116)',
        hex: '#e77474',
    },
    //--------------------------------------"grey"-ish
    greyish: {
        rgb: 'rgb(172, 172, 172)',
        hex: '#acacac',
    },
    warmGrey: {
        rgb: 'rgb(127, 127, 127)',
        hex: '#7f7f7f',
    },
    warmGreyTwo: {
        rgb: 'rgb(150, 150, 150)',
        hex: '#969696',
    },
    warmGreyThree: {
        rgb: 'rgb(127, 126, 126)',
        hex: '#7f7e7e',
    },
    //--------------------------------------"blue"-ish
    darkGreyBlue: {
        rgb: 'rgb(45, 76, 96)',
        hex: '#2d4c60',
    },
    metallicBlue: {
        rgb: 'rgb(63,99,118)',
        hex: '#3f6376',
    },
    //--------------------------------------"green"-ish
    lightGreyGreen: {
        rgb: 'rgb(191, 216, 153)',
        hex: '#bfd899',
    },
    lightGreyGreenTwo: {
        rgb: 'rgb(203, 230, 162)',
        hex: '#cbe6a2',
    },
    //--------------------------------------"white"-ish
    white: {
        rgb: 'rgb(255, 255, 255)',
        hex: '#ffffff',
    },
    whiteTwo: {
        rgb: 'rgb(253, 253, 253)',
        hex: '#fdfdfd',
    },
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
    fortyPoint: {               // maybe should be 17
        pt: 17,                 //40
        pixel: 23,              //53
        // em: 3.313,
    },
    twentyFivePoint: {          // maybe should be 15
        pt: 15,                 // 25
        pixel: 14,              // 33
        // em: 2.063,
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
    twentyPoint: {
        pt: 20,
        pixel: 26,
        em: 1.6,
    },
    eighteenPoint: {
        pt: 18,
        pixel: 24,
        em: 1.5,
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
        // pixel: {
        fontFamily: fonts.itimRegular,
        fontSize: fontSize.oneHundredPoint.pixel,
        color: colorPalette.white.hex,
        // },
        // em: {
        //     fontFamily: fonts.itimRegular,
        //     fontSize: fontSize.oneHundredPoint.em,
        //     color: colorPalette.white.hex,
        // },
    },
    textStyle2: {
        fontFamily: fonts.itimRegular,
        fontSize: fontSize.oneHundredTwentyFivePoint.pixel,
        color: colorPalette.darkPeach.hex,
    },
    textStyle3: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.fortyPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle4: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fortyPoint.pixel,
        color: colorPalette.white.hex,
    },
    textStyle5: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyFivePoint.pixel,
        color: colorPalette.darkPeach.hex,
    },
    textStyle6: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.fortyPoint.pixel,
        color: colorPalette.metallicBlue.hex,
    },
    textStyle7: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyFivePoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle8: {   // same as textStyle7
      fontFamily: 'Rubik-Regular',
    fontSize: fontSize.twentyFivePoint.pixel,
      color: colorPalette.warmGrey.hex,
    },
    textStyle9: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyFourPoint.pixel,
        color: colorPalette.warmGreyTwo.hex,
    },
    textStyle10: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyPoint.pixel,
        color: colorPalette.warmGreyThree.hex,
    },
    textStyle11: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle12: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyPoint.pixel,
        color: colorPalette.darkPeach.hex,
    },
    textStyle13: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.fortyPoint.pixel,
        color: colorPalette.warmGreyTwo.hex,
    },
    textStyle14: {  //same as textStyle6
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.fortyPoint.pixel,
        color: colorPalette.metallicBlue.hex,
    },
    textStyle15: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyPoint.pixel,
        color: colorPalette.greyish.hex,
    },
    textStyle16: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.eighteenPoint.pixel,
        color: colorPalette.darkGreyBlue.hex,
    },
    textStyle17: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twelvePoint.pixel,
        color: colorPalette.warmGrey,
    },
    textStyle18: {  //same as textStyle17
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twelvePoint.pixel,
        color: colorPalette.warmGrey,
    },
    textStyle19: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle20: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.twentyPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle21: {  //same as textStyle19
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle22: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyTwoPointFivePoint.pixel,
        color: colorPalette.beige.hex,
    },
    textStyle23: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyTwoPointFivePoint.pixel,
        color: colorPalette.lightGreyGreen.hex,
    },
    textStyle24: {
        fontFamily: fonts.rubikMedium,
        fontSize: fontSize.twentyPoint.pixel,
        color: colorPalette.darkGreyBlue.hex,
    },
    textStyle25: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colorPalette.white.hex,
    },
    textStyle26: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.fourteenPoint.pixel,
        color: colorPalette.warmGreyTwo.hex,
    },
    textStyle27: {
        fontFamily: fonts.rubikMedium,
        fontSize: fontSize.fifteenPoint.pixel,
        color: colorPalette.darkGreyBlue.hex,
    },
    textStyle28: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.twelvePoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle29: {
        fontFamily: fonts.rubikRegular,
        fontSize: fontSize.twentyFourPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
    textStyle30: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.twentyFivePoint.pixel,
        color: colorPalette.warmGreyTwo.hex,
    },
    textStyle31: {
        fontFamily: fonts.rubikLight,
        fontSize: fontSize.fortyPoint.pixel,
        color: colorPalette.warmGrey.hex,
    },
}
