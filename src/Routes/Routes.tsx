import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from '../contexts/AuthContext';

import Home from './Home';
import Login from './Login';

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </NavigationContainer>
  );
}
