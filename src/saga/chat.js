import { takeLatest, all, select } from 'redux-saga/effects'
import * as types from './../constant/actionTypes'
import socket from './../socket'

function* startChat() {
  try {
    const config = yield select(state => state.config)
    socket.emit('start-chat', config)
  } catch (e) {
  }
}
function* sendMessage(action) {
  try {
    yield socket.emit('message', action.payload)
  } catch (e) {
  }
}
function* leaveChat() {
  try {
    yield socket.emit('leave-chat')
  } catch (e) {
  }
}
function* startTyping() {
  try {
    yield socket.emit('start-typing')
  } catch (e) {
  }
}
function* stopTyping() {
  try {
    yield socket.emit('stop-typing')
  } catch (e) {
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(types.START_CHAT, startChat),
    takeLatest(types.SEND_MESSAGE, sendMessage),
    takeLatest(types.LEAVE_CHAT, leaveChat),
    takeLatest(types.START_TYPING, startTyping),
    takeLatest(types.STOP_TYPING, stopTyping),
  ])
}
