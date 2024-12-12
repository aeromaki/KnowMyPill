import { Image, ImageSourcePropType, Pressable, Text } from "react-native"
import { useTheme } from "../contexts"
import { THEME_COLORS } from "../types"

export function MainOptionButton({ icon, text, onClick, marginBottom = 15 }: {
  icon: ImageSourcePropType,
  text: string,
  onClick: () => void,
  marginBottom?: number
}) {
  const { background, contrast, accent } = useTheme()

  return (
    <Pressable
      style={{
        backgroundColor: THEME_COLORS[contrast],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400,
        height: 110,
        borderRadius: 20,
        marginBottom: marginBottom
      }}
      onPress={onClick}
    >
      <Image
        source={icon}
        style={{
          width: 90,
          height: 90,
          marginLeft: 25
        }}
      />
      <Text
        style={{
          color: THEME_COLORS[background],
          width: 225,
          textAlign: 'center',
          fontSize: 27,
          fontWeight: 'bold',
          marginRight: 25
        }}
      >
        {text}
      </Text>
    </Pressable>
  )
}