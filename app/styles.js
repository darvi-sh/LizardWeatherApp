import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  date: {
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  weatherIcon: {
    color: '#FFFFFF',
    fontSize: 100,
    fontFamily: 'weathericons-regular-webfont',
    textAlign: 'center',
  },
  temperature: {
    fontFamily: 'sans-serif-thin',
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  windBearing: {
    fontFamily: 'weathericons-regular-webfont',
    textAlign: 'center',
    fontSize: 32,
    color: 'grey',
  },
  location: {
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 10,
    color: 'grey'
  },
  main: {
    fontFamily: 'sans-serif-thin',
  },
  slider: {
    height: 10,
    margin: 10,
  },
  sliderValue: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
