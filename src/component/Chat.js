import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import _ from 'lodash'

class Chat extends React.Component {
  constructor() {
    super()
    this.isTyping = false;
    this.chatListRef = React.createRef()

    this.stopTyping = _.debounce(this.stopTyping, 500)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.chat.messages.length < this.props.chat.messages.length
      || this.props.chat.partnerLeaved === true
      || this.props.chat.partnerTyping === true) {
      this.chatListRef.current && this.chatListRef.current.scrollTo(0, this.chatListRef.current.scrollHeight)
    }
  }
  stopTyping = () => {
    this.isTyping = false
    this.props.stopTyping()
  }
  onKeyUp = (event) => {
    if (!event.target.value.trim()) {
      event.target.value = ''
      return
    }
    if (event.keyCode === 13 && !event.shiftKey) {
      this.props.sendMessage(event.target.value)
      this.isTyping = false
      this.props.stopTyping()
      event.target.value = ''
    }
    this.isTyping && this.stopTyping()
  }
  onKeyDown = () => {
    if (!this.isTyping) {
      this.isTyping = true
      this.props.startTyping()
    }
  }
  render() {
    const props = this.props
    if (!props.chat.chating) return null
    const chat = props.chat
    return (
      <div className="chat-panel">
        <div className="message-list" ref={this.chatListRef}>
          <div>
            {chat.isPairingSuccess && chat.messages.length === 0 && <p>Please say "Hello" to greet</p>}
            {chat.messages.map((message, index) => (
              <div key={index}
                className={classnames({
                  message: true,
                  me: message.socketId === chat.socketId
                })}
              >
                {message.content}
              </div>
            ))}
            {chat.partnerLeaved && <div className="partner-leaved">Stranger has left.</div>}
            {chat.partnerTyping && <div className="partner-typing">Stranger is typing...</div>}
          </div>
        </div>
        <div className="message-input">
          <textarea disabled={!chat.isPairingSuccess}
            placeholder={chat.isPairingSuccess ? "Please input message!" : "Please wait for partner!"}
            onKeyUp={this.onKeyUp}
            onKeyDown={this.onKeyDown}>
          </textarea>
          <Button color="secondary" component="span" onClick={props.leaveChat} >
            <CancelIcon />
          </Button>
        </div>
      </div>
    )
  }
}

export default Chat
