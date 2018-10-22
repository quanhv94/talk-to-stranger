import { all, fork } from 'redux-saga/effects'
import chat from './chat'

export default function* rootSaga() {
  yield all([
    fork(chat)
  ])
}
