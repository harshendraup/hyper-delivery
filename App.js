import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';
import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}