import React, { Component } from 'react'
import { 
    FlatList,
    View 
} from 'react-native'

import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {
    renderEmpty = () => <Empty text ="No hay categorias" />
    itemSeparator = () => <Separator/>
    renderItem = ( {item} ) => {
        return(
        <Suggestion {...item } />
        )
    }
    keyExtractor = (item) => item.id.toString();

    render() {
        return (
        <View>
            <FlatList
                horizontal
                keyExtractor = { this.keyExtractor }
                data ={ this.props.list }
                renderItem={ this.renderItem }
                ListEmptyComponent = { this.renderEmpty } 
                ItemSeparatorComponent = { this.itemSeparator }
            />
        </View>
        )
    }
}

export default CategoryList;

