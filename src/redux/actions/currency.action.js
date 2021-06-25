import AsyncStorage from '@react-native-async-storage/async-storage'
import { GET_CURRENCY } from '../actionType'

export const getCurrency = (key) => async dispatch => {
  const data = await AsyncStorage.getItem(key)
  
  dispatch({
    type: GET_CURRENCY,
    payload: data
  })
}