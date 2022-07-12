import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';

const Card = ({item, rank, isSearchedUser}: PropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{rank}</Text>
      <Text style={styles.text}>{item.bananas}</Text>
      <Text style={styles.text}>{'' + isSearchedUser + ''}</Text>
    </View>
  );
};

export default Card;
