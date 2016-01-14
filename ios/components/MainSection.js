import React, {
    Component,
    View,
    Text,
    Image,
    ListView
}
from 'react-native';

export default class MainSection extends Component {
    render() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.todos),
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.text}</Text>}
            />
        )
    }
}
