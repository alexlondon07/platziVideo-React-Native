import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet 
} from 'react-native';

const Empty = (props) => (
    <View>
        <Text style={ styles.text}>{ props.text }</Text>
    </View>
);

const styles = StyleSheet.create({
    conatiner:{
        padding: 10,
    },
    text:{
        fontSize: 16,
    }
});

export default Empty;
