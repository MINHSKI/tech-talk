Flex

box1: {
    width: 50,
    height: 50,
    backgroundColor: '#0cf'
  },
box2: {
    width: 50,
    height: 50,
    backgroundColor: '#f00',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: '#0f0'
  },
  box4: {
    width: 50,
    height: 50,
    backgroundColor: '#00f'
  },


  Drawer Navigator

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


Header Options

 {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#fff'},
    headerTitle: 'Tech Talk',
    headerLeft: <Button
    title="Menu"
    onPress={() => navigation.toggleDrawer()} />
  })
}