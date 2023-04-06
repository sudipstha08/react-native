/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {AppNavigator} from './navigators';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    /**
     * The SafeAreaProvider component is a View from where insets provided
     * by Consumers are relative to. This means that if this view overlaps
     * with any system elements (status bar, notches, etc.) these values
     * will be provided to descendent consumers. Usually you will have one provider at the top of your app.
     */
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
