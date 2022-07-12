import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  title: {
    fontSize: hp(1.8),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
  },
});
