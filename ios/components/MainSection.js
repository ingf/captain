import React, {
    Component,
    View,
    ListView,
    Text,
}
from 'react-native';
import TodoItem from './TodoItem';

export default class MainSection extends Component {
    render() {
        let {
            actions
        } = this.props;
        return (
            <View>
                {this.props.todos.map((item, i) => {
                    return <TodoItem key={i} todo={item} actions={actions}/>
                })}
            </View>
        )

        // var ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
        // this.state = {
        //     dataSource: ds.cloneWithRows(this.props.todos),
        // };
        // return (

        //     <ListView
        //         dataSource={this.state.dataSource}
        //         renderRow={(rowData) => <Text>{rowData.text}</Text>}
        //     />
        // )
    }
}
