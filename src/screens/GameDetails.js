import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Animated, Easing } from 'react-native';
import { SharedElementTransition } from 'react-native-navigation';

const styles = StyleSheet.create({
  background: {
    width: null,
    height: null,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    left: 50,
    color: '#FBFCFC',
    fontSize: 48,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
});

class GameDetails extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarTransparent: true,
    navBarTextColor: '#fff',
    navBarButtonColor: '#fff',
  };
  constructor(props) {
    super(props);

    this.animated = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 200,
      easing: Easing.in(Easing.exp),
      useNativeDriver: true,
    }).start();
  }
  render() {
    const titleStyles = [
      styles.title,
      {
        opacity: this.animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      {
        transform: [
          {
            translateY: this.animated.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50],
            }),
          },
        ],
      },
    ];
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('../images/batman_bg.jpg')}
        >
          <SharedElementTransition
            sharedElementId={'SharedTextId'}
            showDuration={0}
            hideDuration={300}
            // animateClipBounds
            showInterpolation={{
              type: 'linear',
              easing: 'accelerate',
            }}
            hideInterpolation={{
              type: 'linear',
              easing: 'accelerate',
            }}
          >
            <Text fadeDuration={0} />
          </SharedElementTransition>
          <Animated.Text style={titleStyles}>
            Batman
          </Animated.Text>

        </Image>
      </View>
    );
  }
}

export default GameDetails;
