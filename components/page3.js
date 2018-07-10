import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class Page3 extends React.Component{
  static navigationOptions({navigation}) {
    return {
      headerLeft: <Button title="Go Back" onPress={() => navigation.goBack()} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Page Number 3</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page3
