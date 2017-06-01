import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import Root from '../components'
import actions from '../../app/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Root)
