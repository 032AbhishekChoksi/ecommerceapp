//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../common/Header';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title={'Ecommerce App'}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
