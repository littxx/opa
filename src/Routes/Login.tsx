import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../Pages/LoginScreen';
import Cadastro from '../Pages/Cadastro';

const Stack = createStackNavigator();

export default function Login() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomWidth: 0.4,
            borderBottomColor: '#00b94a',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}
