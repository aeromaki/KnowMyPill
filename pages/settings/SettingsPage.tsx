import { ScrollView, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAccount, useTheme } from "../../contexts";
import { MainOptionButton, TopBarContainer } from "../../props"
import { ColorSettingPage } from "./ColorSettingPage";
import { THEME_COLORS } from "../../types";


const Stack = createNativeStackNavigator();

function SettingsMenuPage() {
  const navigation = useNavigation()

  const account = useAccount()

  return (
    <TopBarContainer text='환경 설정 메뉴'>
      <View
        style={{
          height: '100%'
        }}
      >
        <ScrollView>
          <MainOptionButton
            icon={require('../../assets/icon.png')}
            text='알러지 성분 설정'
            onClick={() => { }}
          />
          <MainOptionButton
            icon={require('../../assets/icon.png')}
            text='색상 설정'
            // @ts-ignore
            onClick={() => navigation.navigate('colorSetting')}
          />
          {
            account == 'login' ?
              <>
                <MainOptionButton
                  icon={require('../../assets/icon.png')}
                  text='약 인식 이력'
                  onClick={() => { }}
                />
                <MainOptionButton
                  icon={require('../../assets/icon.png')}
                  text='오디오 설정'
                  onClick={() => { }}
                />
              </> : <></>
          }
          <MainOptionButton
            icon={require('../../assets/icon.png')}
            text='도움말'
            onClick={() => { }}
          />
          {
            account == 'login' ?
              <MainOptionButton
                icon={require('../../assets/icon.png')}
                text='계정'
                onClick={() => { }}
                marginBottom={0}
              /> :
              <MainOptionButton
                icon={require('../../assets/icon.png')}
                text='로그인/회원가입'
                onClick={() => { }}
                marginBottom={0}
              />
          }
        </ScrollView>
      </View>
    </TopBarContainer>
  )
}

export function SettingsPage() {
  const { background, contrast, accent } = useTheme()

  return (
    <Stack.Navigator initialRouteName='settingsMenu'>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: THEME_COLORS[background]
          }
        }}
      >
        <Stack.Screen
          name='settingsMenu'
          component={SettingsMenuPage}
        />
        <Stack.Screen
          name='colorSetting'
          component={ColorSettingPage}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}