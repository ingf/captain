import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components'
import * as actions from '../app/actions'

export default connect(
  state => {
    return {
      todos: state.todos,
    }
  },
  dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch),
    }
  },
)(App)
