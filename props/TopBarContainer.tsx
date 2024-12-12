import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { useTheme } from "../contexts"
import { useNavigation } from "@react-navigation/native"
import { THEME_COLORS } from "../types"


export function TopBarContainer({ text, children }: {
  text: string
  children: React.ReactNode
}) {
  const { background, contrast, accent } = useTheme()
  const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
          marginBottom: 15
        }}
      >
        <Text
          style={{
            color: THEME_COLORS[contrast],
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 25
          }}
        >
          {text}
        </Text>
        <Pressable
          // @ts-ignore
          onPress={() => navigation.popTo('main')}
        >
          <Image
            source={require('../assets/icon.png')}
            style={{
              width: 40,
              height: 40,
              marginRight: 25
            }}
            alt='홈'
          />
        </Pressable>
      </View>

      <View
        style={{
          alignItems: 'center'
        }}
      >
        {children}
      </View>
    </View>
  )
}