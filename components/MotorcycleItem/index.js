import React from 'react';
import{View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

//declare functional component 
//renders JSX
const MotorcycleItem = (props) => {
    return (
        <View style={styles.vehicleContainer}>
            <ImageBackground 
                source={require('../../assets/images/FemaleStand.jpg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Superlow</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton 
                type='primary' 
                content={'Custom Order'} 
                onPress={() => {
                    console.log('Custom order button was pressed ya digg')
            }} /> 

            <StyledButton 
                type='secondary' 
                content={'Exsisting Inventory'} 
                onPress={() => {
                    console.log('Exsisting Inventory button was pressed ya digg')
            }} /> 

        </View>
    );
};

export default MotorcycleItem; 

//define property of text content 