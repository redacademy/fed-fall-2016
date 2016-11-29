import React, { Component, } from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

class SearchBar extends Component {
    render(){
        return (
            <TextInput style={styles.TextInput}/>
        )
    }
}

export default SearchBar;