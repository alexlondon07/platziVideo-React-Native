import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-af-video-player';
import Layout from '../components/layout';

const url = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
const logo = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.png'
const placeholder = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.png'
const title = 'My video title'

export default class Player extends Component {
  render() {
    return (
        <Layout
            video={
                <Video 
                    autoPlay
                    url={url}
                    title={title}
                    logo={logo}
                    placeholder={placeholder}
                />
            }
        >
      </Layout>
    );
  }
}
