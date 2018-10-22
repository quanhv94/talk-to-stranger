import * as types from '../constant/actionTypes'

export const config = payload => ({ type: types.CONFIG, payload: payload })
export const connectSuccess = payload => ({ type: types.CONNECT_SUCCESS, payload: payload })
export const pairSuccess = () => ({ type: types.PAIR_SUCCESS })
