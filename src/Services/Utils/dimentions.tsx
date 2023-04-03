import { Dimensions, PixelRatio, Platform } from "react-native";
export const { width, height } = Dimensions.get("window");

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

export const isIPhoneX = () =>
  Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS
    ? (width >= X_WIDTH && height >= X_HEIGHT) ||
      (width >= XSMAX_WIDTH && height >= XSMAX_HEIGHT)
    : false

export const widthToDp = (number: number): number => {
  const actualwidth = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * actualwidth) / 100);
};

export const heightToDp = (number: number): number => {
  const actualHeight = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * actualHeight) / 100);
};

export const addnumber= (X:number,Y:number)=>{
     return X + Y;
}
const generateSizes = () => {
  let sizes = {
    large: 0,
    normal: 0,
    small: 0,
  };
  let aspectRatio = Math.round((height / width + Number.EPSILON) * 100) / 100;

  if (aspectRatio > 1.5 && aspectRatio < 1.9) {
    sizes = {
      large: (height / width) * 14,
      normal: (height / width) * 7.55,
      small: (height / width) * 5.66,
    };
  }
  if (aspectRatio > 1.9 && aspectRatio < 2.1) {
    sizes = {
      large: (height / width) * 14,
      normal: (height / width) * 8.55,
      small: (height / width) * 6.66,
    };
  }
  if (aspectRatio > 2.1 && aspectRatio < 2.2) {
    sizes = {
      large: (height / width) * 14,
      normal: (height / width) * 8.55,
      small: (height / width) * 6.65,
    };
  }
  return sizes;
};

export const Texts = generateSizes();
