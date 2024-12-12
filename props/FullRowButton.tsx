import { Pressable, Text } from "react-native"
import { useTheme } from "../contexts"
import { THEME_COLORS } from "../types";


export function FullRowButton({ text, onPress }: {
  text: string,
  onPress: () => void
}) {
  const { background, contrast, accent } = useTheme();

  return (
    <Pressable
      style={{
        width: 320,
        height: 55,
        borderRadius: 10,
        backgroundColor: THEME_COLORS[contrast],
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: THEME_COLORS[background],
          fontSize: 22.5,
          fontWeight: 'bold',
        }}
      >
        {text}
      </Text>
    </Pressable>
  )
}