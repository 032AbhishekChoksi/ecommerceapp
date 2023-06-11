//import liraries
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();
// create a component
const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default Main;
