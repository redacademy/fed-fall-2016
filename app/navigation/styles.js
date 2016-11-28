import {
    StyleSheet,
} from 'react-native';

export const navigationStyles = StyleSheet.create({
  selectedTab: {
    backgroundColor: '#0084FF',
  },
});
 
export const styles = StyleSheet.create({
    header: {
        height: 24,
        fontSize: 24,
    },

    selectedItemStyle: {
        backgroundColor: '#999999'
    },

    titleText: {
        fontWeight: 'bold'
    },

    selectedTitleText: {
        color: 'black'
    },

    notSelectedTitleText: {
        color: '#999999'
    }
});