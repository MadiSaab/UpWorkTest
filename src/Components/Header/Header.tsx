//import liraries
import React, { FC, useState } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import { widthToDp } from '../../Services/Utils/dimentions';

interface props {
  headerText: string;
}
// create a component
export const MainHeader: FC<props> = ({headerText}) => {

  return (
    <View>
      <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>{headerText}</Text>
    </View>
  );
};

