import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CalendarView from '../views/Calendar';
import ScheduleView from '../views/Schedule';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={CalendarView} />
      <Tab.Screen name="Schedule" component={ScheduleView} />
    </Tab.Navigator>
  );
}