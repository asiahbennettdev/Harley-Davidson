import React from 'react';
import  {View, Text, Pressable} from 'react-native';
// import styles from '../MotorcycleItem/styles';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type; //props send type outside of the component 
    // console.log(type);
    const content = props.content;
    // console.log(content);
    const onPress = props.onPress;
    // console.log(onPress);

    //can destructure variables using:
    // const { type, content, onPress } = props;



    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]} //backgroundColor === color variable defined.Need to merge 2 styles the one we want to define use array. Allows to dynamically change styles 
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text> 
            </Pressable> 
        </View>
    );
};

export default StyledButton;
//JS will refer to content variable declared in props
// call onPress function from outside component, 2 different functions with different functionality to the same button using properties 