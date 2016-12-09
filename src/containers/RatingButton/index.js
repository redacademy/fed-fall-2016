import React, { Component } from 'react'
import IconOptionalTitleRectangularBorder from '../../icons/IconOptionalTitleRectangularBorder'

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
            case 2: 
            default: 
                return (
                    <Text>gfd</Text>
                )
        }
    }
}

export default RatingButton

// <IconOptionalTitleRectangularBorder 
//                         onPressFn={() => this.setState({ step: 1 })} 
//                         size={125} iconColor="#e28385" 
//                         iconName={'quality-ribbon'}
//                     />