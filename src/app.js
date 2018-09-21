import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list.js';
import Search from './sections/containers/search';

export class AppLayout extends Component {
  render() {
    return (
      <Home>
        <Header />
        <Search/>
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

export default connect(null)(AppLayout);
