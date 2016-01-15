import React, {
    Component,
    View,
    ListView,
    Text,
}
from 'react-native'
import TodoItem from './TodoItem'
import {
    SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE
}
from '../../src/constants/TodoFilters'

const TODO_FILTERS = {
    SHOW_ALL: () => true,
    SHOW_ACTIVE: (todo) => !todo.completed,
    SHOW_COMPLETED: (todo) => todo.completed,
}

export default class MainSection extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            filter: SHOW_ALL
        }
    }

    render() {

        let {
            actions, todos
        } = this.props
        const completedCount = todos.reduce((item, i) => {

        })
        return (
            <View>
                {this.props.todos.map((item, i) => {
                    return <TodoItem key={i} todo={item} actions={actions}/>
                })}
            </View>
        )

        // var ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // })
        // this.state = {
        //     dataSource: ds.cloneWithRows(this.props.todos),
        // }
        // return (

        //     <ListView
        //         dataSource={this.state.dataSource}
        //         renderRow={(rowData) => <Text>{rowData.text}</Text>}
        //     />
        // )
    }
}
