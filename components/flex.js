import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flex = () => {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>1</View>
        <View style={styles.box2}>2</View>
        <View style={styles.box3}>3</View>
        <View style={styles.box4}>4</View>
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
  box1: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    backgroundColor: '#000'
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: '#f00',
  },
  box3: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#0f0'
  },
  box4: {
    width: 50,
    height: 50,
    backgroundColor: '#00f'
  },
});

export default Flex
