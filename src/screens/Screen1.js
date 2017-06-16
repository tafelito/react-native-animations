import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F44336',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'rnanimations.Screen2',
      title: 'Screen 2',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Press me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Screen;
