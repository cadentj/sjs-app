import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function TopAppBar() {
  const _goBack = () => console.log('Went back');
  //<Appbar.BackAction onPress={_goBack} />

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      
      <Appbar.Content title="Wednesday, March 23 | Day 3" subtitle="Caden Juang" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};
