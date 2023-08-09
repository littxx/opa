import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Pages/HomeScreen';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
