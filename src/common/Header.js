/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
// eslint-disable-next-line no-unused-vars
const {height, width} = Dimensions.get('window');

// create a component
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={rightIcon}
          style={[styles.icon, {width: 40, height: 40}]}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    height: 65,
    backgroundColor: '#0786DAFD',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

//make this component available to the app
export default Header;
