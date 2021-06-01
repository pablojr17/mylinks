import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: '#7303c0',
        style: { backgroundColor: '#03001e', opacity: .9 },
        activeTintColor: '#fdeff9',
        labelStyle: {
          fontSize: 19,
          color: '#fff'
        }

      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar Link',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color="#fff"
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: 'Meus Links',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color="#fff"
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default Routes;