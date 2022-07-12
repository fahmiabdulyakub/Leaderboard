import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Input, Button} from 'components';
import {ICSearch} from 'assets';
import {PropsType} from './types';
import {Colors} from 'themes';

const Header = ({value, onChangeText}: PropsType) => {
  return (
    <View style={styles.container}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder="Search User"
        icon={<ICSearch />}
      />
      <Button text="Search" textColor={Colors.white} />
    </View>
  );
};

export default Header;
