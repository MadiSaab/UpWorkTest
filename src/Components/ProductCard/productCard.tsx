//import liraries
import React, { FC, useState } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from "react-native-fast-image";

import { styles } from './style';
import { widthToDp } from '../../Services/Utils/dimentions';

interface props {
  item: any;
}
// create a component
export const ProductCard: FC<props> = ({ item}) => {

  return (
    <View style={styles.container}>
      <FastImage resizeMode='stretch' source={{ uri: item.img }} style={styles.ProductImgContainer} />
      <View style={{justifyContent:'space-between'}}>
      <Text numberOfLines={1} style={[styles.productText,{marginLeft:widthToDp(3)}]}>{item.name}</Text>
      <View style={styles.TextContainer}>
      <Text numberOfLines={2} style={styles.simpleText}>Live</Text>
      <TouchableOpacity style={styles.JoinButton}>
      <Text numberOfLines={2} style={styles.simpleText}>Join</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

