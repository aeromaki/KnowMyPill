import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountProvider, ThemeProvider, useAccount, useTheme } from './contexts'
import { MainPage, SettingsPage } from './pages';
import { AccountSelectionPage } from './pages/accounts';
import { THEME_COLORS } from './types';
import { PotionPage } from './pages/potion';


const Stack = createNativeStackNavigator();

function Core() {
  const { background, contrast, accent } = useTheme()
  const barStyle = background == 'black' ? 'light-content' : 'dark-content'

  const account = useAccount()

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: THEME_COLORS[background]
        }}
      >
        {
          account === undefined ?
            <></> :
            <Stack.Navigator initialRouteName={account === null ? 'accountSelection' : 'main'}>
              <Stack.Group
                screenOptions={{
                  headerShown: false,
                  contentStyle: {
                    backgroundColor: THEME_COLORS[background]
                  }
                }}
              >
                <Stack.Screen
                  name='accountSelection'
                  component={AccountSelectionPage}
                />
                <Stack.Screen
                  name='main'
                  component={MainPage}
                />
                <Stack.Screen
                  name='potion'
                  component={PotionPage}
                />
                <Stack.Screen
                  name='settings'
                  component={SettingsPage}
                />
              </Stack.Group>
            </Stack.Navigator>
        }
      </SafeAreaView>
    </>
  )
}

export default function App() {
  return (
    <AccountProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Core />
        </NavigationContainer>
      </ThemeProvider>
    </AccountProvider>
  )
}
