import React, { Component } from 'react'
import { View } from 'react-native'
import { IconMulti } from '../../components'
import {
    rate,
    unrate
} from '../../redux/actions'
import { connect } from 'react-redux'
import HalfButton from '../HalfButton'

const icon = {
    up: {
        name: 'thumbs-up',
        color: '#b2d287',
    },
    down: {
        name: 'thumbs-down',
        color: '#e28385',
    }
}

class RatingButton extends Component {
    constructor(props){
        super(props)

        this.state = {
            step: 0,
        }
    }

    render(){
        switch(this.state.step) {
            case 1:
                return (
                    <View style={{height: 130, width: 130, marginLeft: 10}}>
                        <HalfButton
                            onPressTopFn={() => {
                                this.props.rate({prop: this.props.attribute, value: false})
                                this.setState({ step: 2 })
                            }}

                            onPressBottomFn={() => {
                                this.props.unrate({prop: this.props.attribute, value: true})
                                this.setState({ step: 2 })
                            }}
                        />
                    </View>
                )
            case 2: 
                const i = this.props[this.props.attribute] ? icon.up : icon.down 
                return <IconMulti name={i.name} fillColor={i.color} onPressFn={() => this.setState({ step: 1})} iconColor="white" size={130} border />
            default: 
                return (
                    <View>
                        <IconMulti 
                            name={this.props.iconName}
                            iconColor="#e28385"
                            size={130}
                            border
                            onPressFn={() => this.setState({ step: 1 })}
                        />
                    </View>
                )
        }
    }
}

const mapStateToProps = (state) => ({
    quality: state.button.quality,
    cleanliness: state.button.cleanliness,
    nursingFriendly: state.button.nursingFriendly,
    quiet: state.button.quiet,
})

const mapDispatchToProps = {
    rate,
    unrate,
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingButton)