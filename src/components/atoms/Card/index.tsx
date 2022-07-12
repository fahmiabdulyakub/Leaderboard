import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Card</Text>
      <Text style={styles.text}>Card</Text>
      <Text style={styles.text}>Card</Text>
      <Text style={styles.text}>Card</Text>
    </View>
  );
};

export default Card;
