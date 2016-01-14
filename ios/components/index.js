import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet
}
from 'react-native';

import Header from './Header';
import MainSection from './MainSection';

const Root = React.createClass({
    componentWillMount: function() {
        console.log(this);
    },
    render: function() {
        let actions = this.props.actions;
        return (
            <View style={styles.container}>
                <Header addTodo={actions.addTodo}></Header>
                <MainSection todos={this.props.todos}></MainSection>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F6F6F6'
    },
    newItem: {
        backgroundColor: '#FFFFFF',
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 20
    },
    offline: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5
    }
})

module.exports = Root
