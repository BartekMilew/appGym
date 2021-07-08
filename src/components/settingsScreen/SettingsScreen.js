import * as React from 'react';
import { Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';

function SettingsScreen({dataJson}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  export default SettingsScreen