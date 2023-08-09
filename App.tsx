import React from 'react';
import Routes from './src/Routes/Routes';
import {StatusBar, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#131313'} />
      <Routes />
    </View>
  );
};

export default App;
