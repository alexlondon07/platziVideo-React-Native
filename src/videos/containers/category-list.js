import React, { Component } from 'react'
import { 
    FlatList,
    View 
} from 'react-native'

import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Layout from '../components/category-list-layout';
import Category from '../components/category';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list: state.categoryList
  }
}
class CategoryList extends Component {
    renderEmpty = () => <Empty text ="No hay categorias" />
    itemSeparator = () => <Separator/>
    renderItem = ( {item} ) => {
        return(
        <Category {...item } />
        )
    }
    keyExtractor = (item) => item.id.toString();

    render() {
        return (
        <Layout
            title ="Categorias">
            <FlatList
                horizontal
                keyExtractor = { this.keyExtractor }
                data ={ this.props.list }
                renderItem={ this.renderItem }
                ListEmptyComponent = { this.renderEmpty } 
                ItemSeparatorComponent = { this.itemSeparator }
            />
        </Layout>
        )
    }
}

export default connect(mapStateToProps)(CategoryList);

