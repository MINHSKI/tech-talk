import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
    return (
      <View style={styles.container}>
        <Text>The Best Home Page</Text>
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

export default Home

