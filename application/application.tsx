import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './stacks';
import styles from './styles';

export default (): ReactElement => {
  return (
    <SafeAreaView style={styles.flexOne}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaView>
  );
};
