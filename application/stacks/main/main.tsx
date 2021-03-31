import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { MainParamList } from './main.types';

const Stack = createStackNavigator<MainParamList>();

import { Transitions, UseTransition, Chapters } from '../../screens';

export default (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chapters" component={Chapters} />
      <Stack.Screen name="Transitions" component={Transitions} />
      <Stack.Screen name="UseTransition" component={UseTransition} />
    </Stack.Navigator>
  );
};
