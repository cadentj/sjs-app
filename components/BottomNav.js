import * as React from 'react';
import { Button, BottomNavigation, Text } from 'react-native-paper';
import CalendarView from '../views/Calendar';

const MusicRoute = () =>  <Text>Albums</Text>;

const AlbumsRoute = () =>  <CalendarView/>;

const RecentsRoute = () => <Text>Recents</Text>;

export default function BottomNav() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'album' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'album' },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'music':
        return <MusicRoute jumpTo={jumpTo} />;
      case 'albums':
        return <AlbumsRoute jumpTo={jumpTo} />;
      case 'recents':
        return <RecentsRoute jumpTo={jumpTo} />;
    }
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}