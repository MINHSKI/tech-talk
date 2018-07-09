import {createStackNavigator} from 'react-navigation'
import Home from './home'
import React from 'react'
import {} from 'react-native'

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
}, {
  headerMode: 'float',
  navigationOptions: () => ({
    headerStyle: {backgroundColor: '#fff'},
    headerTitle: 'Tech Talk',
  })
});

export default StackNavigator
