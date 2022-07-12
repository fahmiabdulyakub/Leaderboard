import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    marginVertical: hp(1),
    marginHorizontal: wp(2),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: 6,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: hp(1.8),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    marginHorizontal: wp(1),
    width: wp(22.5),
  },
});
