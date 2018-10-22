import ConfigForm from './../component/ConfigForm'
import { connect } from 'react-redux'
import { config } from '../action/config'
import { startChat } from './../action/chat'

const mapStateToProp = state => ({
  yourGender: state.config.yourGender,
  partnerGender: state.config.partnerGender,
  chating: state.chat.chating
})
const mapDispatchToProps = dispatch => ({
  config: (payload) => dispatch(config(payload)),
  startChat: () => dispatch(startChat())
})

export default connect(mapStateToProp, mapDispatchToProps)(ConfigForm)
