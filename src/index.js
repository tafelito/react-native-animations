import { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import registerScreens from './screens';

const navigatorStyle = {
  tabBarHidden: true,
  statusBarHidden: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    registerScreens();
    this.startApp('Screen1');
  }

  startApp = (screen) => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: `rnanimations.${screen}`,
        title: screen,
        navigatorStyle,
      },
    });
  };
}

export default App;
