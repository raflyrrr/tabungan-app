import { moderateScale, scale } from 'react-native-size-matters'

export default styles = {
  cardView: {
    backgroundColor: '#fff',
    height: moderateScale(60),
    borderColor: '#eeee',
    marginHorizontal: scale(15),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      height: moderateScale(1),
    },
    shadowOpacity: moderateScale(0.1),
    shadowRadius: moderateScale(1),
    flexDirection: 'row',
    elevation: moderateScale(0.6),
  },
  cardImageView: {
    height: moderateScale(40),
    width: moderateScale(40), 
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    right:moderateScale(5)

  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  cardFont: {
    fontSize: moderateScale(15),
    right :moderateScale(10)
  }
}