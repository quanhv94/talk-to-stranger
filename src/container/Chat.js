import Chat from './../component/Chat'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './../action/chat'

const mapStateToProp = state => ({
  chat: state.chat,
  config: state.config
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProp, mapDispatchToProps)(Chat)
