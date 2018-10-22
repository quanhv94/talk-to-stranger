
import io from 'socket.io-client';
import { connectSuccess, pairSuccess } from "../action/config"
import { receiveMessage, partnerLeaveChat, partnerStartTyping, partnerStopTyping } from "../action/chat"
const socket = io(process.env.REACT_APP_SOCKET_URL || (window.location.protocol + "//" + window.location.hostname + ":8888"));
export const setupSocket = (dispatch) => {
  socket.on('connected', (data) => {
    dispatch(connectSuccess(data))
  })

  socket.on('pair-success', (data) => {
    dispatch(pairSuccess(data))
  })
  socket.on('receive-message', (data) => {
    dispatch(receiveMessage(data))
  })
  socket.on('partner-leave-chat', () => {
    dispatch(partnerLeaveChat())
  })
  socket.on('partner-start-typing', () => {
    dispatch(partnerStartTyping())
  })
  socket.on('partner-stop-typing', () => {
    dispatch(partnerStopTyping())
  })
}
export default socket;
