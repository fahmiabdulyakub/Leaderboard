import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICArrowRight} from 'assets';

const Home = () => {
  return (
    <View style={styles.container}>
      {<ICArrowRight />}
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;
