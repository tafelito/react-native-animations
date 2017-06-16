import { Navigation } from 'react-native-navigation';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default function registerScreens() {
  Navigation.registerComponent('rnanimations.Screen1', () => Screen1);
  Navigation.registerComponent('rnanimations.Screen2', () => Screen2);
}
