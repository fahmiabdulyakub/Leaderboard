import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {Header} from 'components';

const Home = () => {
  const [value, setValue] = useState('');

  const onSearch = (text: string) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Header value={value} onChangeText={onSearch} />
    </View>
  );
};

export default Home;
