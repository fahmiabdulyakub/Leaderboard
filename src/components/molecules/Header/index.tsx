import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Input} from 'components';
import {ICSearch} from 'assets';
import {PropsType} from './types';

const Header = ({value, onChangeText}: PropsType) => {
  return (
    <View style={styles.container}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder="Search User"
        icon={<ICSearch />}
      />
    </View>
  );
};

export default Header;
