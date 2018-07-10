import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Page1 = (props) => {
    return (
      <View style={styles.container}>
        <Text>Page Number 1</Text>
        <Button title="Page 2" onPress={() => props.navigation.navigate('Page2')} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page1
