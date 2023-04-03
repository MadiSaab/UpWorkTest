import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { heightToDp, widthToDp } from '../../Services/Utils/dimentions';

interface Style {
  container: ViewStyle;
  ProductImg: ImageStyle;
  ProductImgContainer: ViewStyle;
  productText: TextStyle;
  counterContainer: ViewStyle;
  counterText: TextStyle;
  BottonContainer: ViewStyle;
  ButtonText: ViewStyle;
  TextContainer: ViewStyle;
  JoinButton:ViewStyle,
}

export const styles = StyleSheet.create({
  container: {
    width: widthToDp(90),
    margin: heightToDp(1),
    backgroundColor:'white',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  ProductImgContainer: {
    width: widthToDp(25),
    height: widthToDp(20),
    backgroundColor: 'gray',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  JoinButton:{backgroundColor:'orange',width:widthToDp(18),height:heightToDp(4),borderRadius:20,justifyContent:'center',alignItems:'center'},
  TextContainer: {
    marginHorizontal: widthToDp(3),
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5,
  },
  productText: { marginTop: heightToDp(1.4), width: widthToDp(63) },
  PriceText: { fontWeight: 'bold', color: 'black' },
  simpleText: { color: 'black' },
  ButtonText: { fontWeight: 'bold', color: 'white' },
});
