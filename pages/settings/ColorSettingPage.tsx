import { View, Text, Pressable } from "react-native"
import { ContrastText, FullRowButton, TopBarContainer } from "../../props"
import { useTheme, useThemeDispatch } from "../../contexts"
import { THEME_COLORS, ThemeColor } from "../../types"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

function ColorButton({ text, textColor, backgroundColor, selected, onPress }: {
  text: string,
  textColor: ThemeColor,
  backgroundColor: ThemeColor,
  selected: boolean,
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 90,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME_COLORS[backgroundColor],
        borderWidth: selected ? 3 : 0,
        borderColor: '#FF00FF',
        borderRadius: 22.5,
        padding: 10
      }}
    >
      <Text
        style={{
          color: THEME_COLORS[textColor],
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const BlackColorButton = ({ onPress, selected }: {
  onPress: () => void,
  selected: boolean
}) => ColorButton({
  text: '검정색',
  textColor: 'white',
  backgroundColor: 'black',
  selected: selected,
  onPress: onPress
})

const WhiteColorButton = ({ onPress, selected }: {
  onPress: () => void,
  selected: boolean
}) => ColorButton({
  text: '흰색',
  textColor: 'black',
  backgroundColor: 'white',
  selected: selected,
  onPress: onPress
})

const GrayColorButton = ({ onPress, selected }: {
  onPress: () => void,
  selected: boolean
}) => ColorButton({
  text: '회색',
  textColor: 'black',
  backgroundColor: 'gray',
  selected: selected,
  onPress: onPress
})

const BlueColorButton = ({ onPress, selected }: {
  onPress: () => void,
  selected: boolean
}) => ColorButton({
  text: '파란색',
  textColor: 'black',
  backgroundColor: 'blue',
  selected: selected,
  onPress: onPress
})

const RedColorButton = ({ onPress, selected }: {
  onPress: () => void,
  selected: boolean
}) => ColorButton({
  text: '빨간색',
  textColor: 'black',
  backgroundColor: 'red',
  selected: selected,
  onPress: onPress
})

const YellowColorButton = ({ onPress, selected }: {
  onPress: () => void,
  selected: boolean
}) => ColorButton({
  text: '노란색',
  textColor: 'black',
  backgroundColor: 'yellow',
  selected: selected,
  onPress: onPress
})

const RowMargin = () => <View style={{ width: 10 }} />
const ColMargin = () => <View style={{ height: 40 }} />

function BackgroundColorSetting({ selection, setSelection }: {
  selection: ThemeColor,
  setSelection: React.Dispatch<ThemeColor>
}) {
  const { background, contrast, accent } = useTheme()

  return (
    <View>
      <ContrastText
        text='배경 색상'
        style={{
          fontsize: 22.5,
          textAlign: 'left',
          marginBottom: 15
        }}
      />
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <BlackColorButton
          onPress={() => setSelection('black')}
          selected={selection == 'black'}
        />
        <RowMargin />
        <WhiteColorButton
          onPress={() => setSelection('white')}
          selected={selection == 'white'}
        />
        <RowMargin />
        <View
          style={{
            width: 90,
            height: 45,
          }}
        />
      </View>
    </View>
  )
}

function FullColorSetting({ text, selection, setSelection }: {
  text: string,
  selection: ThemeColor,
  setSelection: React.Dispatch<ThemeColor>
}) {
  const { background, contrast, accent } = useTheme()

  return (
    <View>
      <ContrastText
        text={text}
        style={{
          fontsize: 22.5,
          textAlign: 'left',
          marginBottom: 15
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10
        }}
      >
        <BlackColorButton
          onPress={() => setSelection('black')}
          selected={selection == 'black'}
        />
        <RowMargin />
        <WhiteColorButton
          onPress={() => setSelection('white')}
          selected={selection == 'white'}
        />
        <RowMargin />
        <GrayColorButton
          onPress={() => setSelection('gray')}
          selected={selection == 'gray'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <BlueColorButton
          onPress={() => setSelection('blue')}
          selected={selection == 'blue'}
        />
        <RowMargin />
        <RedColorButton
          onPress={() => setSelection('red')}
          selected={selection == 'red'}
        />
        <RowMargin />
        <YellowColorButton
          onPress={() => setSelection('yellow')}
          selected={selection == 'yellow'}
        />
      </View>
    </View>
  )
}

function ColorSelectionPreview({
  backgroundSelection,
  contrastSelection,
  accentSelection
}: {
  backgroundSelection: ThemeColor,
  contrastSelection: ThemeColor,
  accentSelection: ThemeColor
}) {
  const { background, contrast, accent } = useTheme()

  return (
    <>
      <View
        style={{
          width: 320,
          height: 120,
          borderColor: THEME_COLORS[contrast],
          borderWidth: 1,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            backgroundColor: THEME_COLORS[backgroundSelection],
            padding: 15,
            borderRadius: 10
          }}
        >
          <Text
            style={{
              color: THEME_COLORS[contrastSelection],
              fontSize: 22.5,
              fontWeight: 'bold',
            }}
          >
            이 약은 <Text
              style={{
                color: THEME_COLORS[accentSelection]
              }}
            >아침</Text>약 입니다.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 270,
          height: 22.5,
          flexDirection: 'row',
          bottom: 120 + 11.25
        }}
      >
        <ContrastText
          text='예시'
          style={{
            fontSize: 22.5,
            backgroundColor: THEME_COLORS[background],
            paddingLeft: 5,
            paddingRight: 5
          }}
        />
      </View>
    </>
  )
}

export function ColorSettingPage() {
  const navigation = useNavigation()

  const { background, contrast, accent } = useTheme()
  const dispatch = useThemeDispatch()

  const [backgroundSelection, setBackgroundSelection] = useState(background)
  const [contrastSelection, setContrastSelection] = useState(contrast)
  const [accentSelection, setAccentSelection] = useState(accent)

  return (
    <TopBarContainer text='색상 설정'>
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <View style={{ height: 20 }} />
        <ColorSelectionPreview
          backgroundSelection={backgroundSelection}
          contrastSelection={contrastSelection}
          accentSelection={accentSelection}
        />
        <BackgroundColorSetting
          selection={backgroundSelection}
          setSelection={setBackgroundSelection}
        />
        <ColMargin />
        <FullColorSetting
          text='대비 색상'
          selection={contrastSelection}
          setSelection={setContrastSelection}
        />
        <ColMargin />
        <FullColorSetting
          text='강조 색상'
          selection={accentSelection}
          setSelection={setAccentSelection}
        />
      </View>
      <ColMargin />
      <FullRowButton
        text='확인'
        onPress={() => {
          dispatch({
            background: backgroundSelection,
            contrast: contrastSelection,
            accent: accentSelection
          })
          navigation.goBack()
        }}
      />
    </TopBarContainer>
  )
}