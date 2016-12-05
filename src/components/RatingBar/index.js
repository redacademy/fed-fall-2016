import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconOptionalTitleRectangularFill from '../../icons/IconOptionalTitleRectangularFill'
import { ratingColorGenerator } from '../../config/functions'

class RatingBar extends Component {
    constructor() {
        super()
        this.state = {
            width: 0,
        }
    }

    render() {
        console.log(this)
        return (
            <View
                onLayout={
                    (event) => {
                        this.setState({
                            width: event.nativeEvent.layout.width,
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
                <IconOptionalTitleRectangularFill
                    backgroundColor={ratingColorGenerator(this.props.ratings.quality)}
                    size={(this.state.width / 4) * .9}
                    iconName="quality-ribbon"
                    noTitle={this.props.titleless}
                    />
                <IconOptionalTitleRectangularFill
                    backgroundColor={ratingColorGenerator(this.props.ratings.clean)}
                    size={(this.state.width / 4) * .9}
                    iconName="cleanliness"
                    noTitle={this.props.titleless}
                    />
                <IconOptionalTitleRectangularFill
                    backgroundColor={ratingColorGenerator(this.props.ratings.nursing)}
                    size={(this.state.width / 4) * .9}
                    iconName="breast-feeding"
                    noTitle={this.props.titleless}
                    />
                <IconOptionalTitleRectangularFill
                    backgroundColor={ratingColorGenerator(this.props.ratings.quiet)}
                    size={(this.state.width / 4) * .9}
                    iconName="quiet"
                    noTitle={this.props.titleless}
                    />
            </View>
        )
    }
}

RatingBar.propTypes = {
    ratings: PropTypes.object.isRequired,
}

export default RatingBar

// Usage:
// requires a ratings object passed in… this will be fetched from the database,
// but a hardcoded example is below:
// <RatingBar titleless ratings={{quality: 'HIGH', clean: 'MEDIUM', nursing: 'LOW', quiet: 'MEDIUM'}} />

// The optional prop "titleless" will omit the rendering of titles under the icons
