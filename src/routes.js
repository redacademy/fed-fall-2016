import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from './containers/Auth'
import LocationHome from './containers/LocationHome'

class Router extends Component {
  render() {
    switch (this.props.route) {
      case 'login':
        return <Auth />
      default:
        return <LocationHome />
    }
  }
}


const mapStateToProps = state => ({
  route: state.route,
})

export default connect(mapStateToProps)(Router)
