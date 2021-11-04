import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import AppNavigator from './src/navigation/Main';

enableScreens(false);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <NavigationContainer>
        <Host>
          <AppNavigator />
        </Host>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const Container = styled.View`
  flex: 1;
  backgroundColor: white;
  marginBottom: 10px;

  paddingHorizontal:16px;
`;

export default App;
