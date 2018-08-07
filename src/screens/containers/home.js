import React,{Component} from 'react';

class Home extends Comment{
    render() {
        return this.props.children
    }
}

export default Home;