import { Text } from "react-native"
import { THEME_COLORS } from "../types"
import { useTheme } from "../contexts"

export function ContrastText({ text, style }: {
  text: string,
  style?: object
}) {
  const { background, contrast, accent } = useTheme()

  return (
    <Text
      style={{
        ...{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 23,
          color: THEME_COLORS[contrast],
        }, ...style
      }}
    >
      {text}
    </Text>
  )
}