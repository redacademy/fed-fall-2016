import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


import LocationListView from '../LocationListView';




class LocationSuggestions extends Component {
  render() {
    return (
      <LocationListView locationList={this.props.locationSuggestions} locationSuggestions />
    );
  }
}

const mapStateToProps = (state) => ({
   locationSuggestions: state.card.locationSuggestions
})

export default connect(mapStateToProps)(LocationSuggestions);
