import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    processColor,
    StatusBarIOS,
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
        StatusBarIOS.setHidden(true)
    }

    onSave(text) {
        let {actions} = this.props
        this.setState({
            newTodo:false,
        })
        actions.addTodo(text)
    }

    onAdd() {
        this.setState({
            newTodo: true
        })
    }

    render() {
        let {actions} = this.props
        let main
        if(this.state.newTodo) {
            main = (
                <TodoTextInput
                    newTodo
                    placeholder="Pull To Add Task"
                    addTodo={this.onSave.bind(this)}>
                </TodoTextInput>
            )
        }else{
            main = (
                <View style={styles.container}>
                    <View style={styles.list}>
                        <MainSection
                            todos={this.props.todos} 
                            actions={actions}
                        >
                        </MainSection>
                    </View>
                    <Text style={styles.add} onPress={this.onAdd.bind(this)}>+</Text>
                </View>
            )
        }
        return main
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    list: {
        flex: 1,
    },
    add: {
        height: 100,
        fontSize:80,
        fontWeight:'100',
        textAlign: 'center',
    },
})

module.exports = Root
