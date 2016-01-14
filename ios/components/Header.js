import React, {
    Component,
    View,
    Text,
    Image,
    TextInput
}
from 'react-native';

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
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="What needs to be done?"
                    onChangeText={this.onChangeText.bind(this)}
                ></TextInput>
            </View>
        )
    }
}
