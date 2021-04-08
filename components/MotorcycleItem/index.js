import React from 'react';
import{View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

//declare functional component 
//renders JSX
const MotorcycleItem = (props) => {
    // const name = props.name;
    // const tagline = props.tagline;
    // const image = props.image;
    // const taglineCTA = props.taglineCTA;
    const { name, tagline, taglineCTA, image } = props.motorcycle; //implement props render information based on props

    return (
        <View style={styles.vehicleContainer}>
            <ImageBackground 
                source = {image}
                // source={require('../../assets/images/FemaleStand.jpg')}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline} 
                    {' '}
                        <Text style={styles.subtitleCTA}>
                            {taglineCTA}
                        </Text>
                    </Text>
            </View>


            <View style={styles.buttonContainer}>
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
        </View>
    );
};

export default MotorcycleItem; 

//define property of text content 