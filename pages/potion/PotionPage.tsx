import { View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from "../../contexts";
import { MainOptionButton, TopBarContainer } from "../../props"
import { PotionCheckPage } from "./PotionCheckPage";
import { PotionPouringPage } from "./PotionPouringPage";
import { THEME_COLORS } from "../../types";


const Stack = createNativeStackNavigator();

function PotionMenuPage() {
  const navigation = useNavigation()

  return (
    <TopBarContainer text='물약 복용 메뉴'>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MainOptionButton
          icon={require('../../assets/icon.png')}
          text='물약 따르기'
          // @ts-ignore
          onClick={() => navigation.navigate('potionPouring')}
        />
        <MainOptionButton
          icon={require('../../assets/icon.png')}
          text='잔량 확인'
          // @ts-ignore
          onClick={() => navigation.navigate('potionCheck')}
          marginBottom={100}
        />
      </View>
    </TopBarContainer>
  )
}

export function PotionPage() {
  const { background, contrast, accent } = useTheme()

  return (
    <Stack.Navigator initialRouteName='potionMenu'>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: THEME_COLORS[background]
          }
        }}
      >
        <Stack.Screen
          name='potionMenu'
          component={PotionMenuPage}
        />
        <Stack.Screen
          name='potionPouring'
          component={PotionPouringPage}
        />
        <Stack.Screen
          name='potionCheck'
          component={PotionCheckPage}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}