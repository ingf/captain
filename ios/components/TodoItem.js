import React, {
    PanResponder,
    StyleSheet, Component, View, Text,
}
from 'react-native'
import TodoTextInput from './TodoTextInput'
import Swipeout from 'react-native-swipeout'

export default class TodoItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false
        }
    }

    handleSave(id, text) {
        let {
            actions
        } = this.props

        if (text.length === 0) {
            actions.deleteTodo(id)
        } else {
            actions.editTodo(id, text)
        }

        this.setState({
            editing: false
        })
    }

    // componentDidMount() {
    //     // setTimeout(() => {
    //     //     this.refs.swipeout._close()
    //     // }, 2000)
    // }

    componentWillMount() {
        // this._panResponder = PanResponder.create({
        //     onStartShouldSetPanResponder: () => true,
        //     onMoveShouldSetPanResponder: () => true,
        //     onPanResponderGrant: this._highlight.bind(this),
        //     onPanResponderMove: this._handlePanResponderMove.bind(this),
        //     onPanResponderRelease: this._handlePanResponderEnd.bind(this),
        //     onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
        // })
    }

    _highlight(e, gestureState) {
        console.log(e, gestureState)
    }

    _handlePanResponderMove(e, gestureState) {
        console.log(gestureState.moveY, gestureState.y0, gestureState.dy, gestureState.vy)        
    }

    _handlePanResponderEnd(e, gestureState) {
        console.log('end');
    }

    render() {
        let {
            todo, actions
        } = this.props
        let that = this
        let element

        if (this.state.editing) {
            element = (
                <TodoTextInput
                    text={todo.text}
                    editing={this.state.editing}
                    onSave={text => this.handleSave(todo.id, text)}
                />
            )
        } else {
            let item = [styles.item]
            if (todo.completed) {
                item.push({textDecorationLine: 'line-through'})
            }
            element = (
                <View 
                    >
                    <Text style={item}>
                        {todo.text}
                    </Text>
                </View>
            )
        }

        let swipeoutBtns = [{
            text: 'Edit',
            backgroundColor: '#aaa',
            onPress: () => {
                that.setState({
                    editing: true
                })
            }
        }, {
            text: 'Delete',
            backgroundColor: '#0f0',
            onPress: (data) => {
                actions.deleteTodo(todo.id)
            }
        }, {
            text: todo.completed ? 'UnDo' : 'Do',
            backgroundColor: '#f00',
            onPress: (data) => {
                actions.completeTodo(todo.id)
            }
        }]

        return (
            <Swipeout ref="swipeout"
                autoClose={true}
                close={true}
                right={swipeoutBtns}
            >
                {element}
            </Swipeout>
        )
        // return element
    }
}

let styles = StyleSheet.create({
    item: {
        height: 35,
        padding: 6,
        paddingLeft: 20,
    },
})
