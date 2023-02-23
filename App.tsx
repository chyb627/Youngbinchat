import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useContext } from 'react';
import AuthContext from './src/context/AuthContext';
import AuthProvider from './src/context/AuthProvider';
import ChatScreen from './src/screens/ChatScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { RootStackParamList } from './src/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Screens = () => {
  const { user, processingSignin, processingSignup, initialized } = useContext(AuthContext);

  const renderRootStack = useCallback(() => {
    // loading
    if (!initialized) {
      return <Stack.Screen name="Loading" component={LoadingScreen} />;
    }

    // login
    if (user != null && !processingSignin && !processingSignup) {
      return (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      );
    }

    // logout
    return (
      <>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
      </>
    );
  }, [user, processingSignin, processingSignup, initialized]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>{renderRootStack()}</Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Screens />
    </AuthProvider>
  );
};

export default App;
