import React from 'react';
import { View, Text, FlatList } from 'react-native';
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
            
            />
        </View>
    );
};

export default MotorcycleList; 