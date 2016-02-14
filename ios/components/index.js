import React, {
    PanResponder,
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    processColor,
}
from 'react-native'

import TodoTextInput from './TodoTextInput'
import MainSection from './MainSection'

const CIRCLE_HIGHLIGHT_COLOR = 'green'

class Root extends Component {
    constructor() {
        super()
        this.state = {
            newTodo: false,
        }
    }
    componentWillMount() {
        console.log(this.props)
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: this._highlight.bind(this),
            onPanResponderMove: this._handlePanResponderMove.bind(this),
            onPanResponderRelease: this._handlePanResponderEnd.bind(this),
            onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
        })
    }

    _highlight(e, gestureState) {
        console.log(e, gestureState)
    }

    _handlePanResponderMove(e, gestureState) {
        console.log(gestureState.moveY, gestureState.y0, gestureState.dy, gestureState.vy)
        let dy = gestureState.dy;
        if (dy <= 40) {
            this.refs.view.setNativeProps({
                style: {
                    top: dy-40,
                }
            })
        }
    }

    _handlePanResponderEnd(e, gestureState) {
        let dy = gestureState.dy;
        if (dy >= 40) {
            this.setState({
                newTodo: true,
            })
        }
    }

    onSave(text) {
        let {actions} = this.props
        this.setState({
            newTodo:false,
        })
        this.refs.view.setNativeProps({
            style: {
                top: -40,
            }
        })
        actions.addTodo(text)
    }

    render() {
        let {actions} = this.props
        let mainSection
        if(!this.state.newTodo) {
            mainSection = <MainSection todos={this.props.todos} actions={actions}></MainSection>
        }
        return (
            <View style={{top: 20}}>
                <View
                    ref="view"
                    style={styles.container}
                    {...this._panResponder.panHandlers}
                >
                    <TodoTextInput
                        newTodo
                        placeholder="Pull To Add Task"
                        addTodo={this.onSave.bind(this)}>
                    </TodoTextInput>
                    {mainSection}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -40,
    }
})

module.exports = Root
