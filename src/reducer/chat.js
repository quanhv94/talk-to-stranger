import * as types from '../constant/actionTypes'
import { createReducer } from 'redux-create-reducer'

const initialState = {
  chating: false,
  socketId: null,
  partnerLeaved: false,
  partnerTyping: false,
  isPairingSuccess: false,
  messages: [],
}

export default createReducer(initialState, {
  [types.CONNECT_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
  [types.START_CHAT]: state => ({ ...state, chating: true, partnerLeaved: false, isPairingSuccess: false, partnerTyping: false, messages: [] }),
  [types.LEAVE_CHAT]: state => ({ ...state, chating: false }),
  [types.PARTNER_LEAVE_CHAT]: state => ({ ...state, partnerLeaved: true }),
  [types.PAIR_SUCCESS]: state => ({ ...state, isPairingSuccess: true }),
  [types.RECEIVE_MESSAGE]: (state, action) => ({ ...state, messages: [...state.messages, action.payload] }),
  [types.PARTNER_START_TYPING]: state => ({ ...state, partnerTyping: true }),
  [types.PARTNER_STOP_TYPING]: state => ({ ...state, partnerTyping: false }),
})
