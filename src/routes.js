import React from 'react'
import { connect } from 'react-redux'
import Auth from './containers/Auth'
import LocationHome from './containers/LocationHome'

const Router = ({route}) => {
  switch (route) {
    case 'login':
      return <Auth />
    case 'home':
      return <LocationHome />
    default:
      return <LocationHome />
  }
}

const mapStateToProps = state => ({
  route: state.route,
})

export default connect(mapStateToProps)(Router)
