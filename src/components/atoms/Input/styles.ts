import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(4.8),
    borderRadius: 10,
    paddingHorizontal: wp(3),
    backgroundColor: Colors.white,
  },
  input: {
    fontSize: hp(1.8),
    fontFamily: Fonts.Inter,
    color: Colors.gray,
    width: wp(60),
    top: 1,
  },
});
