import React, { Component } from 'react';
import { Container, StyleSheet,ScrollView } from 'react-native';
import Video from 'react-native-af-video-player';
import Layout from '../components/layout';

const theme = {
  title: '#FFF',
  more: '#446984',
  center: '#7B8F99',
  fullscreen: '#446984',
  volume: '#A5957B',
  scrubberThumb: '#234458',
  scrubberBar: '#DBD5C7',
  seconds: '#DBD5C7',
  duration: '#DBD5C7',
  progress: '#446984',
  loading: '#DBD5C7'
}
const url = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
const logo = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.png'
const placeholder = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.png'
const title = 'My video title'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    margin: 10
  }
})

export default class Player extends Component {

  render() {
    return (
        <Layout
            video={
              <ScrollView style={styles.container}>
                <Video 
                    autoPlay
                    url={url}
                    title={title}
                    logo={logo}
                    placeholder={placeholder}
                    theme={theme}
                    rotateToFullScreen
                />
                </ScrollView>
            }
        />
    );
  }
}
