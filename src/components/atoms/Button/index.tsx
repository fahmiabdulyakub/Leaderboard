import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = ({text}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
