import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(8),
    borderRadius: 5,
    paddingHorizontal: wp(3.6),
  },
  input: {
    fontSize: hp(2),
    fontFamily: Fonts.PoppinsRegion,
    color: Colors.light_grey,
    textDecorationLine: 'underline',
    flex: 1,
  },
});
