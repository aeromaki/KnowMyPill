import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContrastText, FullRowButton } from "../../props"
import { useAccountDispatch, useTheme } from "../../contexts"
import { THEME_COLORS } from "../../types"
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";

const Stack = createNativeStackNavigator();

function AccountSelectionMenuPage() {
  const { background, contrast, accent } = useTheme()

  const navigation = useNavigation()

  const accountDispatch = useAccountDispatch()

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ContrastText
        text={'로그인 시\n사용 기한 알림, 인식 약 이력\n기능 추가 사용 가능'}
        style={{
          marginBottom: 40
        }}
      />
      <FullRowButton
        text='로그인'
        // @ts-ignore
        onPress={() => navigation.navigate('login')}
      />
      <View style={{ height: 20 }} />
      <FullRowButton
        text='회원가입'
        // @ts-ignore
        onPress={() => navigation.navigate('register')}
      />
      <View style={{ height: 20 }} />
      <FullRowButton
        text='비회원'
        onPress={() => {
          accountDispatch('guest')
          // @ts-ignore
          navigation.navigate('main')
        }}
      />
    </View>
  )
}

export function AccountSelectionPage() {
  const { background, contrast, accent } = useTheme()

  return (
    <Stack.Navigator initialRouteName='accountSelectionMenu'>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: THEME_COLORS[background]
          }
        }}
      >
        <Stack.Screen
          name='accountSelectionMenu'
          component={AccountSelectionMenuPage}
        />
        <Stack.Screen
          name='login'
          component={LoginPage}
        />
        <Stack.Screen
          name='register'
          component={RegisterPage}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}