import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconRectangularFill from '../../icons/IconRectangularFill'
import { ratingColorGenerator } from '../../config/functions'


class RatingBarNoTitle extends Component {
    static propTypes = {
        ratings: PropTypes.object.isRequired,   // ratings object fetched from db
    }
    constructor() {
        super()
        this.state = {
            width: 0,
        }
    }
    render() {
        return (
            <View
                onLayout={this.props.width
                    ? () => this.setState({ width: this.props.width })
                    : (event) => {
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
                <View style={{ width: this.state.width / 4, justifyContent: 'center', alignItems: 'center' }}>
                    <IconRectangularFill
                        fillColor={ratingColorGenerator(this.props.ratings.quality)}
                        size={(this.state.width / 4) * .9}
                        name="quality-ribbon"
                        />
                </View>
                <View style={{ width: this.state.width / 4, justifyContent: 'center', alignItems: 'center' }}>
                    <IconRectangularFill
                        fillColor={ratingColorGenerator(this.props.ratings.clean)}
                        size={(this.state.width / 4) * .9}
                        name="cleanliness"
                        />
                </View >
                <View style={{ width: this.state.width / 4, justifyContent: 'center', alignItems: 'center' }}>
                    <IconRectangularFill
                        fillColor={ratingColorGenerator(this.props.ratings.nursing)}
                        size={(this.state.width / 4) * .9}
                        name="breast-feeding"
                        />
                </View >
                <View style={{ width: this.state.width / 4, justifyContent: 'center', alignItems: 'center' }}>
                    <IconRectangularFill
                        fillColor={ratingColorGenerator(this.props.ratings.quiet)}
                        size={(this.state.width / 4) * .9}
                        name="quiet"
                        />
                </View >
            </View >
        )
    }
}

export default RatingBarNoTitle
