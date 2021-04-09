import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import MotorcycleItem from '../MotorcycleItem';

import styles from './styles';
import motorcycle from './motorcycle';

const MotorcycleList = (props) => {
    console.log(motorcycle);
    return (
        <View style={styles.container}>
            <FlatList 
                data={motorcycle}
                renderItem={({item}) => <MotorcycleItem motorcycle={item} /> }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default MotorcycleList; 

//FlatList renders list of things 
//Needs array for data and function to render items 
//will be called for each item when it needs to render 
//showsVerticalScrollIndicator hides scroll 
//snapToAlignment attempst to center one item on screen at time
//decelerationRate speed of annimation FlatLine list moves up/down
//snapToInterval height of screen dimension 