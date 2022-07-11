import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    height: hp(8),
    paddingHorizontal: wp(2),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
