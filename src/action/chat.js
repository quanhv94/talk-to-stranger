import * as types from './../constant/actionTypes'

export const startChat = () => ({ type: types.START_CHAT })
export const leaveChat = () => ({ type: types.LEAVE_CHAT })
export const partnerLeaveChat = () => ({ type: types.PARTNER_LEAVE_CHAT })
export const sendMessage = (payload) => ({ type: types.SEND_MESSAGE, payload })
export const receiveMessage = (payload) => ({ type: types.RECEIVE_MESSAGE, payload })
export const startTyping = () => ({ type: types.START_TYPING })
export const stopTyping = () => ({ type: types.STOP_TYPING })
export const partnerStartTyping = () => ({ type: types.PARTNER_START_TYPING })
export const partnerStopTyping = () => ({ type: types.PARTNER_STOP_TYPING })
