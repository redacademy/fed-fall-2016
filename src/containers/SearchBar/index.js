import React, { Component, } from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: ''
        }

    }
    
    render(){
        return (
            <TextInput 
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                placeholder="Search"
                autoCorrect={false}
                style={styles.TextInput} />
        )
    }
}

export default SearchBar