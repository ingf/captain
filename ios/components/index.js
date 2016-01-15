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
                <MainSection todos={this.props.todos} actions={actions}></MainSection>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F6F6F6'
    }
})

module.exports = Root
