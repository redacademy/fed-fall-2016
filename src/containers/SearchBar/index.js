import React, { Component, } from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

class SearchBar extends Component {
    render(){
        return (
            <TextInput 
                placeholder="Search"
                autoCorrect={false}
                label="O"
                style={styles.TextInput}/>
        )
    }
}

export default SearchBar;