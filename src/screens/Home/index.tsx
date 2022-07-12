import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {Card, Header} from 'components';
import {FlatList} from 'react-native';
import {DataUser} from 'constants/DataUser';
import {DataUserList} from './types';

const Home = () => {
  const [search, setSearch] = useState('');
  const [userSort, setUserSort] = useState<DataUserList>(DataUser);
  const [userSearchSort, setUserSearchSort] = useState<DataUserList>({});
  const sorting = (data: DataUserList) => {
    let sorted: DataUserList = {};
    Object.keys(data)
      .sort(function (a: string, b: string) {
        if (data[a].bananas < data[b].bananas) {
          return 1;
        }
        if (data[a].bananas > data[b].bananas) {
          return -1;
        }
        return 0;
      })
      .forEach(function (key) {
        sorted[key] = DataUser[key];
      });

    return sorted;
  };

  const onType = (text: string) => {
    setSearch(text);
    !text && setUserSort(DataUser);
  };

  const onSearch = () => {
    const newData = Object.keys(DataUser).reduce(function (
      item: DataUserList,
      key,
    ) {
      const name = DataUser[key].name.toLowerCase();
      if (name.indexOf(search.toLowerCase()) > -1) {
        item[key] = DataUser[key];
      }
      return item;
    },
    {});

    const slicedDataUser = Object.fromEntries(
      Object.entries(sorting(DataUser)).slice(0, 10),
    );
    const slicedUserSearchSort = Object.fromEntries(
      Object.entries(sorting(newData)).slice(0, 1),
    );
    setUserSearchSort(slicedUserSearchSort);
    setUserSort(slicedDataUser);
  };

  const renderItem = (item: string, index: number) => {
    const key = Object.keys(userSearchSort)[0];
    const isSearchedUser = key === item;
    const isNotTopTen = !isSearchedUser && index === 9;
    return (
      <Card
        item={DataUser[isNotTopTen ? key : item]}
        rank={index + 1}
        isSearchedUser={isNotTopTen ?? isSearchedUser}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header value={search} onChangeText={onType} onPress={onSearch} />
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.textTable}>Name</Text>
          <Text style={styles.textTable}>Rank</Text>
          <Text style={styles.textTable}>Number of bananas</Text>
          <Text style={styles.textTable}>Searched User</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(userSort)}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
};

export default Home;
