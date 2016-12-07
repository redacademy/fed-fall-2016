import React, { Component, PropTypes } from 'react'
import { TextInput } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { searchTextChange } from '../../redux/actions'

class SearchBar extends Component {
    static propTypes = {
        searchTextChange: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props)

        this._onTextChange = this._onTextChange.bind(this)
    }
    _onTextChange(text) {
        this.props.searchTextChange(text)
        // TODO: complete SearchBar
    }
    render() {
        return (
            <TextInput
                onChangeText={this._onTextChange}
                placeholder="Search"
                autoCorrect={false}
                style={styles.TextInput} />
        )
    }
}

const mapStateToProps = (state) => ({
    searchText: state.input,
})

const mapDispatchToProps = {
    searchTextChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
