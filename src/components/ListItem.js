import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';

import Tile from './Tile';

const styles = StyleSheet.create({
  background: {
    width: null,
    height: null,
    flex: 1,
  },
  row: {
    width: 180,
    height: 250,
    elevation: 2,
    backgroundColor: 'transparent',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
  },
});

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.animated = new Animated.Value(0);
    this.state = {
      selectedIndex: -1,
      translateY: 0,
      opacity: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    let anim = {
      toValue: 1,
      duration: 300,
      easing: Easing.in(Easing.exp),
      useNativeDriver: true,
    };
    if (nextProps.selectedIndex === nextProps.index) {
      anim = { ...anim, delay: 50 };
    }
    if (nextProps.selectedIndex >= 0) {
      Animated.timing(this.animated, anim).start();
    } else {
      this.animated.setValue(0);
    }
  }

  onPress = () => {
    this.props.handleNavigate(this.props.index);
  };

  render() {
    const { name, image } = this.props;
    const rowStyles = [
      styles.itemContainer,
      {
        opacity: this.animated.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      },
      {
        transform: [
          {
            translateY: this.animated.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 200],
            }),
          },
        ],
      },
    ];

    return (
      <Animated.View style={rowStyles}>
        <Tile onPress={this.onPress} image={image} text={name} />
      </Animated.View>
    );
  }
}

export default ListItem;
