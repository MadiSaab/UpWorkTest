//import liraries
import React, { FC, useState } from 'react';
import { View, Text ,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { widthToDp } from '../../Services/Utils/dimentions';

interface props {
  PlaceHolder:string;
  value:any;
  icon:string;
  setValue:Function;
}
// create a component
export const Textinput: FC<props> = ({PlaceHolder,value,setValue,icon}) => {

  return (
    <View style={{flexDirection:'row',padding:12,width:widthToDp(90),borderWidth:0.5,borderRadius:15,alignSelf:'center'}}>
     <Icon name={icon} type="Ionicons" size={30} style={{marginHorizontal:widthToDp(4)}} color={'black'} /> 
      <TextInput 
      placeholder={PlaceHolder}
      value={value}
      placeholderTextColor='gray'
      onChangeText={(i:any)=>setValue(i)}
      style={{fontSize:18,fontWeight:'600',color:'black'}}
      />
      </View>
  );
};

