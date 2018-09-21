import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';

import Loading from './src/sections/components/loading';
import { AppLayout } from './src/app';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {

  async componentDidMount() {
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Provider 
         store = {store} 
      >
        <PersistGate
        loading={<Loading />} 
        persistor={persistor}
        >
        <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
