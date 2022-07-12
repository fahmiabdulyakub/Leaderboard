import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';
import {Colors} from 'themes';

const Card = ({item, rank, isSearchedUser}: PropsType) => {
  const textColor = {color: isSearchedUser ? 'red' : Colors.black};
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textColor]}>{item.name}</Text>
      <Text style={styles.text}>{rank}</Text>
      <Text style={styles.text}>{item.bananas}</Text>
      <Text style={styles.text}>{'' + isSearchedUser + ''}</Text>
    </View>
  );
};

export default Card;
