import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignupScreen from './src/screens/SignupScreen';
import { RootStackParamList } from './src/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <Screens />;
};

export default App;
