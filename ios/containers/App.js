const {
    bindActionCreators
} = require('redux')
const {
    connect
} = require('react-redux/native')
const Root = require('../components')
const actions = require('../../app/actions')

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Root)
