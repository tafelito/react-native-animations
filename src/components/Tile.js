import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  image: {
    flex: 3,
    resizeMode: 'cover',
  },
  textContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 10,
  },
});

const Tile = ({ onPress, image, text }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default Tile;
