import React, { Component, } from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTextChange } from '../../redux/actions'

class SearchBar extends Component {    
    constructor(props){
        super(props)

        this.onTextChange = this.onTextChange.bind(this)
    }

    onTextChange(text){
        this.props.searchTextChange(text)
        console.log(this.props.searchText)
    }

    render(){
        return (
            <TextInput 
                onChangeText={this.onTextChange}
                placeholder="Search"
                autoCorrect={false}
                style={styles.TextInput} />
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        searchTextChange
    }, dispatch)
}

function mapStateToProps(state){
    return {
        searchText: state.input
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)