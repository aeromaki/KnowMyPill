import { Image, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useAccountDispatch } from "../../contexts"
import { ContrastText } from "../../props"
import { useEffect } from "react"


export function RegisterPage() {
  const accountDispatch = useAccountDispatch()

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      accountDispatch('login')
      // @ts-ignore
      navigation.navigate('main')
    }, 1000)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ContrastText
        text={'얼굴 인식으로\n회원가입합니다.'}
        style={{ fontSize: 30 }}
      />
      <Image
        source={require('../../assets/icon.png')}
        style={{
          width: 200,
          height: 200,
          marginTop: 100,
          marginBottom: 175
        }}
      />
    </View>
  )
}