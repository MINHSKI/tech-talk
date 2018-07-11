import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Page2 = (props) => {
    return (
      <View style={styles.container}>
        <Text>Page Number 2</Text>
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

export default Page2
