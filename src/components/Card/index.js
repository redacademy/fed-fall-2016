import React, { Component, } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import {
    LocationAdd,
    LocationFilter,
    LocationPreview,
} from '../../containers/'
const { width } = Dimensions.get('window')

class Card extends Component {

    constructor(props) {
        super(props)
        this._renderCard = this._renderCard.bind(this)
    }

    _renderCard() {
        const card = this.props.selectedCard

        if (this.props.cardVisible === true) {
            switch (card) {
                case 'LocationAdd':
                    return (
                        <LocationAdd
                            title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"}
                            lat={49.2634046} lng={-123.1404133} width={width - 80} height={120}
                            />)
                case 'LocationFilter':
                    return <LocationFilter />
                case 'LocationPreview':
                    return <LocationPreview placeId={this.props.placeId} />
                default:
                    return <Text>No Card for selected Action</Text>
            }
        }
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                {this._renderCard()}
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedCard: state.card.selectedCard,
    cardVisible: state.card.cardVisible,
    placeId: state.card.placeId,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
