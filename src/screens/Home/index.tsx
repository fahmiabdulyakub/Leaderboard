import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {Card, Header} from 'components';
import {FlatList} from 'react-native';
import {DataUser} from 'constants/DataUser';
import {DataUserList} from './types';

const Home = () => {
  const [value, setValue] = useState('');
  const userList: DataUserList = DataUser;

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
        <FlatList
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(userList)}
          renderItem={({item}) => <Card item={userList[item]} rank={3} />}
        />
      </View>
    </View>
  );
};

export default Home;
