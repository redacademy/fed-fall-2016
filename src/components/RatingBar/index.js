import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { ratingColorGenerator } from '../../config/functions'
import IconMulti from '../IconMulti'

/**
example usage:
*************** to make the listView rating bars ***************
<RatingBar
    ratings={{ quality: 'HIGH',
        clean: 'MEDIUM',
        nursing: 'LOW',
        quiet: 'MEDIUM',
    }}
    /> 
***********************************************************************

*************** to make the LocationDetails rating bar ***************
<RatingBar
    title
    ratings={{ quality: 'HIGH',
        clean: 'MEDIUM',
        nursing: 'LOW',
        quiet: 'MEDIUM',
    }}
    /> 
***********************************************************************
**/

/**
Rating Bar

<RatingBar
    title
    ratings={{ quality: 'HIGH',
        clean: 'MEDIUM',
        nursing: 'LOW',
        quiet: 'MEDIUM',
    }}
    /> 
 */
class RatingBar extends Component {
    static propTypes = {
        ratings: PropTypes.object.isRequired, // ratings object fetched from db
        title: PropTypes.bool, // omit rendering of titles under icons
    }
    constructor() {
        super()
        this.state = {
            size: 0,
        }
    }
    render() {
        console.log(this.props.ratings)
        const { title, ratings } = this.props
        const { size } = this.state
        return (
            <View
                onLayout={
                    (event) => {
                        this.setState({
                            size: event.nativeEvent.layout.width / 4 * .9,
                        })
                    }
                }
                style={{
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
                >
                <IconMulti
                    name="quality-ribbon"
                    fillColor={ratingColorGenerator(ratings.quality)}
                    size={size}
                    title={title}
                    />
                <IconMulti
                    name="cleanliness"
                    fillColor={ratingColorGenerator(ratings.clean)}
                    size={size}
                    title={title}
                    />
                <IconMulti
                    name="breast-feeding"
                    fillColor={ratingColorGenerator(ratings.nursing)}
                    size={size}
                    title={title}
                    />
                <IconMulti
                    name="quiet"
                    fillColor={ratingColorGenerator(ratings.quiet)}
                    size={size}
                    title={title}
                    />
            </View>
        )
    }
}

export default RatingBar
