import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MotorcycleItem from './components/MotorcycleItem';

export default function App() {
  return (
    <View style={styles.container}>


      <MotorcycleItem 
        name={'Superlow'} 
        tagline={'Order Online For'} 
        taglineCTA={'Touchless Delivery'}//CTA Call To Action...hyperlink
        image={require('./assets/images/WomanHarley.jpg')}/>
      <StatusBar style="auto" /> 
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});


// File that renders application 
// Entry File in Project, first file run when application is opened 
// declare to call styles
// position absolute not to push components underneath 
