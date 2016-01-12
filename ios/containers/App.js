const { bindActionCreators } = require('redux')
const { connect } = require('react-redux/native')
const Groceries = require('../components/Groceries')
const actions = require('../../src/actions')

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Groceries)
