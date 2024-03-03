// src/styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    
  },
  container: {
  height:900,
  },
  input: {
    textAlign:'center',
  },
  serachbar: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    flexDirection:'row',
    marginBottom: 10,
    width: '80%',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  iconsearch: {
    alignSelf:'center',
  },
  iconsearch1: {
    alignSelf:'center',
    marginLeft:150,
  },
  searchbutton: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  weatherContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    width: '100%',
  },
  weatherText: {
    fontSize: 30,
    marginBottom: 10,
  },
  Temperature: {
    fontSize: 30,
    marginBottom: 10,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
  },
  condition: {
    fontSize: 20,
    marginBottom: 10,
    textAlign:'center',
    color:'white',
  },
  circularBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Opacity white color
    borderRadius: 150, // Adjust the value as needed
    padding: 20, // Adjust the value as needed
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20, // Adjust the value as needed to separate it from other elements
  },
  citytext: {
    fontSize: 30,
    textAlign:'center',
    color:'white',
  },
  box:{
    flexDirection:'row',
    height:50,
    width:70,
    alignItems:'center',
    justifyContent:'space-between',

  },
  forecastbox:{
    height:130,
    width:90,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight:10,
    marginTop:20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },

  forecasticon:{
    width: 70,
    height: 70,
    resizeMode: 'cover',
    alignSelf:'center',
  },
  weatherImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    alignSelf:'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'center',
    alignSelf:'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default styles;
