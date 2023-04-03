//import liraries
import React, { FC, useState, useEffect, useMemo } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text} from 'react-native';
import { MainHeader } from '../../Components/Header/Header';
import { Textinput } from '../../Components/TextInput/Textinput';
import { heightToDp } from '../../Services/Utils/dimentions';

interface props {
  navigation: any
}
// create a component
export const EamilScreen: FC<props> = ({ navigation }) => {

  const [email, setemail] = useState<string>('')
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return (
    <SafeAreaView style={styles.container}>
     <MainHeader headerText={'Email'} />
     <View style={{marginTop:heightToDp(4)}}>
       <Text style={{color:regex.test(email) ?'black' : 'red',marginBottom:heightToDp(1),fontSize:18,fontWeight:'600'}}>Email</Text>
      <Textinput icon='mail' PlaceHolder='Email' value={email} setValue={(i:any)=>setemail(i)}/>
      </View>
    </SafeAreaView>
  );
};
