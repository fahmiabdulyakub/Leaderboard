import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {Card, Header} from 'components';

const Home = () => {
  const [value, setValue] = useState('');

  const onSearch = (text: string) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Header value={value} onChangeText={onSearch} />
      <View>
        <View style={styles.table}>
          <Text style={styles.textTable}>Name</Text>
          <Text style={styles.textTable}>Rank</Text>
          <Text style={styles.textTable}>Number of bananas</Text>
          <Text style={styles.textTable}>Searched User</Text>
        </View>

        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default Home;
