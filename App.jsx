import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ArticleScreen from './src/screens/ArticleScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fortnightly' }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ title: 'Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
