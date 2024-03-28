import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/main';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
        <RootSiblingParent> 
        <MainNavigation />
        </RootSiblingParent>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
