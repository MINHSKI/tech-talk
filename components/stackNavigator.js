import {createStackNavigator, createDrawerNavigator} from 'react-navigation'
import Home from './home'
import React from 'react'
import {Button} from 'react-native'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3'
import Flex from './flex'

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Page1: {
    screen: Page1,
  },
  Page2: {
    screen: Page2,
  }
})

const StackNavigator = createStackNavigator({
  Flex: {
    screen: Flex
  },
  Home: {
    screen: DrawerNavigator,
  },
  Page3: {
    screen: Page3
  }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#fff'},
    headerTitle: 'Tech Talk',
    headerLeft: <Button
    title="Menu"
    onPress={() => navigation.toggleDrawer()} />
  })
});

export default StackNavigator
