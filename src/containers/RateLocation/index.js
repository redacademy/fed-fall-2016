import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { textStyles } from '../../config/styles'
import IconOptionalTitleRectangularBorder from '../../icons/IconOptionalTitleRectangularBorder'
import IconOptionalTitleRectangularFill from '../../icons/IconOptionalTitleRectangularFill'
import { AddressBlock, Button } from '../../components'
import { connect } from 'react-redux'
import {
    rate,
    unrate,
} from '../../redux/actions'

class RateLocation extends Component {
    constructor(props){
        super(props)
        
        this.ratees = [
            { attribute: 'quality', iconName: 'quality-ribbon'},
            { attribute: 'cleanliness', iconName: 'cleanliness'},
            { attribute: 'nursingFriendly', iconName: 'breast-feeding'},
            { attribute: 'quiet', iconName: 'quiet'}                            
        ]
    }

    render(){
        return (
            <View style={{flex: 1, paddingBottom: 20}} >
                <AddressBlock title={this.props.place.place} addressLine1={this.props.place.line1} addressLine2={this.props.place.line2}/>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: 50 }}>
                

               {/*
                {
                    this.ratees.map((ratee, index) => {
                        return this.props[ratee.attribute] ? 
                            <IconOptionalTitleRectangularFill 
                                key={index}
                                onPressFn={() => this.props.unrate({prop: ratee.attribute, value: false})} 
                                size={125} backgroundColor="#aecc83" 
                                iconName={`${ratee.iconName}`}
                            />
                            : 
                            <IconOptionalTitleRectangularBorder 
                                key={index}
                                onPressFn={() => this.props.rate({prop: ratee.attribute, value: false})} 
                                size={125} iconColor="#e28385" 
                                iconName={`${ratee.iconName}`}
                            />
                    })
                }
                */}
                
                </View>

                <Button style={{ alignSelf: 'flex-end' }}>
                    <Text style={textStyles.textStyle4}>SUBMIT</Text>
                </Button>
            </View>
        )
    }
} 

const mapStateToProps = (state) => ({
    place: state.map,
    quality: state.button.quality,
    cleanliness: state.button.cleanliness,
    nursingFriendly: state.button.nursingFriendly,
    quiet: state.button.quiet,
})

const mapDispatchToProps = {
    rate,
    unrate,
}

export default connect(mapStateToProps, mapDispatchToProps)(RateLocation)