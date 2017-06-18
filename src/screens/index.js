import { Navigation } from 'react-native-navigation';

import GamesAnimationList from './GamesAnimationList';
import GameDetails from './GameDetails';

export default function registerScreens() {
  Navigation.registerComponent(
    'rnanimations.GamesAnimationList',
    () => GamesAnimationList,
  );
  Navigation.registerComponent('rnanimations.GameDetails', () => GameDetails);
}
