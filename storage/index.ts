import AsyncStorage from "@react-native-async-storage/async-storage"

export const getItem = async <T>(key: string): Promise<T | null> => {
  const item = await AsyncStorage.getItem(key)
  return item != null ? JSON.parse(item) : item
}

export const setItem = async <T>(key: string, value: T): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  }
  catch {
    return false
  }
}