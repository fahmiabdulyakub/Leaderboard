import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {Card, Header} from 'components';
import {FlatList} from 'react-native';
import {DataUser} from 'constants/DataUser';
import {DataUserList} from './types';
import {useEffect} from 'react';

const Home = () => {
  const [value, setValue] = useState('');
  const [userList, setUserList] = useState<DataUserList>({});

  useEffect(() => {
    sorting();
  }, []);

  const sorting = () => {
    let sorted: DataUserList = {};
    Object.keys(DataUser)
      .sort(function (a: string, b: string) {
        if (DataUser[a].bananas < DataUser[b].bananas) {
          return 1;
        }
        if (DataUser[a].bananas > DataUser[b].bananas) {
          return -1;
        }
        return 0;
      })
      .forEach(function (key) {
        sorted[key] = DataUser[key];
      });

    setUserList(sorted);
  };

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
          renderItem={({item, index}) => (
            <Card item={userList[item]} rank={index + 1} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
