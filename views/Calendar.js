import * as React from 'react';
import { Button, BottomNavigation, Text } from 'react-native-paper';
import { View } from 'react-native';
import AgendaCalendar from '../components/AgendaCalendar';

export default function CalendarView() {
    return (
        <View style={{flex:1}}><AgendaCalendar/></View>
    );
}