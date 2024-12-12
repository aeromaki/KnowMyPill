export type ThemeColor = 'black' | 'white' | 'gray' | 'blue' | 'red' | 'yellow'

export const THEME_COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#7E7E7E',
  blue: '#0000FF',
  red: '#FF0000',
  yellow: '#FFFF00'
}

export type Theme = {
  background: ThemeColor,
  contrast: ThemeColor,
  accent: ThemeColor
}

export const DEFAULT_THEME: Theme = {
  background: 'black',
  contrast: 'white',
  accent: 'yellow'
}