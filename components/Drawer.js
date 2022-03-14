import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalendarView from '../views/Calendar';
import ScheduleView from '../views/Schedule';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={ScheduleView} />
      <Drawer.Screen name="Article" component={CalendarView} />
    </Drawer.Navigator>
  );
}