import React from 'react';

import { View, Text } from 'react-native';

import Game from './Game';

class someApp extends React.Component {
  render() {
    return(
      <Game
        randomNumberCount={6}
        initialSeconds={10}
      />
    );
  }
}

export default someApp;