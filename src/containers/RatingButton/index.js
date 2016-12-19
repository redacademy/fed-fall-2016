import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
                    <View>
                    <View style={{height: this.props.size, width: this.props.size, marginLeft: 10}}>
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
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{color: 'gray', marginTop: 5, marginBottom: 10}}>{this.props.rateeTitle}</Text>
                        </View>
                        </View>
                )
            case 2: 
                const i = this.props[this.props.attribute] ? icon.up : icon.down 
                return (
                    <View>
                        <IconMulti name={i.name} fillColor={i.color} onPressFn={() => this.setState({ step: 1})} iconColor="white" size={this.props.size} border />
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{color: 'gray', marginTop: 5, marginBottom: 10, fontSize: 12}}>{this.props.rateeTitle}</Text>
                        </View>
                    </View>
                )
            default: 
                return (
                    <View>
                        <IconMulti 
                            name={this.props.iconName}
                            iconColor="#e28385"
                            size={this.props.size}
                            border
                            onPressFn={() => this.setState({ step: 1 })}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{color: 'gray', marginTop: 5, marginBottom: 10}}>{this.props.rateeTitle}</Text>
                        </View>
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