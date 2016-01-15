import React, {
    Component,
    View,
    Text,
    Image,
    TextInput
}
from 'react-native'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {

    onChangeText(text){
        this.props.addTodo(text)
    }

    render() {
        return (
            <View>
                <Text>
                    todos   
                </Text>
                <TodoTextInput
                    newTodo
                    placeholder="What needs to be done?"
                    onSave={this.onChangeText.bind(this)}
                />
            </View>
        )
    }
}
