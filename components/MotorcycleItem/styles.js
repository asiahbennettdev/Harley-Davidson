import { StyleSheet, Dimensions } from 'react-native';

//object
const styles = StyleSheet.create({
    vehicleContainer:{
        width: '100%',
        height: Dimensions.get('window').height, // take height of screen
      },
      titles:{
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
      },
      subtitle:{
        fontSize: 16,
        color: '#5c5e62'
      },
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      },
});

export default styles;