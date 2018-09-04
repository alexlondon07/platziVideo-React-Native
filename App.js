import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Video from 'react-native-af-video-player';

const styles = StyleSheet.create({
  backgroundVideo: {
  },
})

const url = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
const logo = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.png'
const placeholder = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.png'
const title = 'My video title'

type Props = {};
export default class App extends Component<Props> {
  
  onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }
  state = {
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount(){

    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();

    console.log(movies);
    console.log(categories);

    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render() {
    return (
      <Home>
        <Header/>
          <View>
            <Video 
              autoPlay
              url={url}
              title={title}
              logo={logo}
              placeholder={placeholder}
           />
          </View>

        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <CategoryList
          list = { this.state.categoryList }
        />
        <SuggestionList
          list = { this.state.suggestionList }
        />
      </Home>
    );
  }
}
