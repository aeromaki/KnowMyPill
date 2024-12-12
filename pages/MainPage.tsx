import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MainOptionButton } from "../props"
import { useAccount } from "../contexts"

export function MainPage() {
  const navigation = useNavigation()
  const account = useAccount()

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
      <MainOptionButton
        icon={require('../assets/icon.png')}
        text='약 인식'
        onClick={() => { }}
      />
      <MainOptionButton
        icon={require('../assets/icon.png')}
        text='처방약 인식'
        onClick={() => { }}
      />
      <MainOptionButton
        icon={require('../assets/icon.png')}
        text='물약 복용'
        // @ts-ignore
        onClick={() => navigation.navigate('potion')}
      />
      {
        account == 'login' ?
          <MainOptionButton
            icon={require('../assets/icon.png')}
            text='사용 기한 관리'
            onClick={() => { }}
          /> : <></>
      }
      <MainOptionButton
        icon={require('../assets/icon.png')}
        text='환경 설정'
        // @ts-ignore
        onClick={() => navigation.navigate('settings')}
      />
    </View>
  )
}