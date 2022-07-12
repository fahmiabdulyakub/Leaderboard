import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(3),
  },
  textTable: {
    fontFamily: Fonts.Inter,
    fontSize: hp(1.5),
    color: Colors.blue,
    width: wp(24),
  },
});

export default styles;
