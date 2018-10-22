import * as types from '../constant/actionTypes'
import { createReducer } from 'redux-create-reducer'

const initialState = {
  yourGender: 0,
  partnerGender: 0,
}

export default createReducer(initialState, {
  [types.CONFIG]: (state, action) => ({ ...state, ...action.payload }),
})
