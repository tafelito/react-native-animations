import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Animated,
  Easing,
  InteractionManager,
} from 'react-native';
import { SharedElementTransition } from 'react-native-navigation';

import ListItem from '../components/ListItem';
import games from '../data/games';

const styles = StyleSheet.create({
  background: {
    width: null,
    height: null,
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    top: 50,
    left: 50,
  },
  titleText: {
    color: 'rgb(105, 105, 105)',
    fontSize: 48,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  separator: { width: 70 },
});

class GamesAnimationList extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarTransparent: true,
    navBarTextColor: '#fff',
    navBarButtonColor: '#fff',
    navBarHidden: true,
  };

  constructor(props) {
    super(props);

    this.animatedList = new Animated.Value(0);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = { isVisible: true, selectedIndex: -1 };
  }

  onNavigatorEvent(event) {
    switch (event.id) {
      case 'willAppear':
        this.setState({ selectedIndex: -1 });
        break;
      case 'didAppear':
        this.animatedList.setValue(0);
        break;
      case 'willDisappear':
        break;
      case 'didDisappear':
        break;
      default:
        break;
    }
  }

  handleNavigate = (index) => {
    Animated.timing(this.animatedList, {
      toValue: 1,
      duration: 350,
      easing: Easing.in(Easing.exp),
      useNativeDriver: true,
    }).start();

    this.setState({ selectedIndex: index });

    InteractionManager.runAfterInteractions(() => {
      // ...long-running synchronous task...
      this.props.navigator.push({
        screen: 'rnanimations.GameDetails',
        // animated: false,
        sharedElements: [''],
      });
    });
  };

  render() {
    const itemsStyles = [
      styles.titleContainer,
      {
        opacity: this.animatedList.interpolate({
          inputRange: [0, 0.8],
          outputRange: [1, 0],
        }),
      },
      {
        transform: [
          {
            translateY: this.animatedList.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [0, 50, -50],
            }),
          },
        ],
      },
    ];
    const listStyles = [styles.listContainer];
    return (
      <Image
        style={styles.background}
        source={require('../images/games_bg.jpg')}
      >
        <Animated.View style={itemsStyles}>
          <SharedElementTransition sharedElementId={'SharedTextId'}>
            <Text style={styles.titleText}>
              Suggested games
            </Text>
          </SharedElementTransition>
        </Animated.View>

        <Animated.View style={styles.content}>
          <View style={styles.separator} />
          <FlatList
            contentContainerStyle={listStyles}
            data={games}
            horizontal
            renderItem={({ item, index }) => (
              <ListItem
                {...item}
                index={index}
                handleNavigate={this.handleNavigate}
                selectedIndex={this.state.selectedIndex}
              />
            )}
          />
        </Animated.View>
      </Image>
    );
  }
}

export default GamesAnimationList;
