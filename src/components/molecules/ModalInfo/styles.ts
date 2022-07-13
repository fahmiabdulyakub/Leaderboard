import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
  text: {
    fontSize: hp(1.8),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    bottom: hp(1),
  },
});
