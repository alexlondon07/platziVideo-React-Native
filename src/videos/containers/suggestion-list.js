import React, {Component } from 'react';
import{
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
    
    renderEmpty = () => <Empty text ="No hay suegerencias." />
    
    itemSeparator = () => <Separator/>
    
    renderItem = ( {item} ) => {
        return(
        <Suggestion {...item } />
        )
    }
    render() {
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            }

        ]
        return(
            <Layout
                title = "Recomendado para ti"
            >
            <FlatList
                data ={ list }
                renderItem={ this.renderItem }
                ListEmptyComponent = { this.renderEmpty } 
                ItemSeparatorComponent = { this.itemSeparator }
            />
            </Layout>
        )
    }
}
export default SuggestionList;