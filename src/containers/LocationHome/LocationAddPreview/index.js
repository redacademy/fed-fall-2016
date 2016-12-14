<<<<<<< 875f0e852b7d87e92d84054aac3db71531d71542
// import React, { Component, PropTypes } from 'react'
// import { 
//         Dimensions,
//         Preview,
//         ScrollView,
//         AddressBlock,
//         FilterList,
//         MapBlock,
//         Button,
//         Text } from 'react-native'
// import { textStyles } from '../../../config/styles'

// const { width, height } = Dimensions.get('window')

// class LocationAddPreview extends Component {
//     static propTypes = {
//         locationAdd: PropTypes.bool.isRequired,
//     }
//     render() {
//         if (this.props.locationAdd === true) {
//         return (
//         <Preview>
//             <ScrollView>
//                 <AddressBlock title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"} />
//                 <FilterList showHeader={false} />
//                 <MapBlock lat={49.2634046} lng={-123.1404133} zoom={17} width={width - 80} height={120} pinScale={0.4} pinColor={'red'} iconName={'starbaby-face'} />
//                 <Button style={{ alignSelf: 'flex-end' }}>
//                     <Text style={textStyles.textStyle4}>SUBMIT</Text>
//                 </Button>
//             </ScrollView>
//         </Preview>
//         )
//     } else {
//         return null
//     }
// }
// }


// export default LocationAddPreview
=======
import React, { Component, PropTypes } from 'react'
import { 
        Dimensions,
        Preview,
        ScrollView,
        AddressBlock,
        FilterList,
        MapBlock,
        Button,
        Text } from 'react-native'
import { textStyles } from '../../../config/styles'

const { width, height } = Dimensions.get('window')

class LocationAddPreview extends Component {
    static propTypes = {
        locationAdd: PropTypes.bool.isRequired,
    }
    render() {
        if (this.props.locationAdd === true) {
        return (
        <Preview>
            <ScrollView>
                <AddressBlock title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"} />
                <FilterList showHeader={false} />
                <MapBlock lat={49.2634046} lng={-123.1404133} zoom={17} width={width - 80} height={120} pinScale={0.4} pinColor={'red'} iconName={'starbaby-face'} />
                <Button style={{ alignSelf: 'flex-end' }}>
                    <Text style={textStyles.textStyle4}>SUBMIT</Text>
                </Button>
            </ScrollView>
        </Preview>
        )
    } else {
        return null
    }
}
}


export default LocationAddPreview
>>>>>>> create LocationAddPreview component and remove from LocationHome
