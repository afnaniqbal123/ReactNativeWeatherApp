// src/styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    height: 900,
  },
  input: {
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  searchBar: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    flexDirection: 'row',
    marginBottom: 10,
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  iconButton: {
    alignSelf: 'center',
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
  temperature: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  circularBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 150,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  citytext: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  weatherDetailBox: {
    flexDirection: 'row',
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forecastbox: {
    height:130,
    width:100,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight:10,
    marginTop:20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  forecasticon: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  weatherImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'center',
    alignSelf: 'center',
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
