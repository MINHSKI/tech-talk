import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flex = () => {
    return (
      <View style={styles.container}>
        <View>1</View>
        <View>2</View>
        <View>3</View>
        <View>4</View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default Flex
