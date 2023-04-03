//import liraries
import React, { FC, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";

import { GetAllProductsAPI } from '../../Services/ApiServices/apiServices';
import { ProductCard } from '../../Components/ProductCard/productCard';
import { SCREENS } from '../../Services/Utils/constants';
import { MainHeader } from '../../Components/Header/Header';
import { Textinput } from '../../Components/TextInput/Textinput';
import { styles } from './style';

interface props {
  navigation: any; 
}
// create a component
export const ProductsScreen: FC<props> = ({ navigation }) => {

  const [products, setproducts] = useState([])
  const ProductsQuery = useQuery("posts", GetAllProductsAPI,
    {
      onSuccess: (data) => {
        setproducts(data)
      }
    })

  const [search, setSearch] = useState<string>('')

  const onSearch = (query: string) => {
    setSearch(query)
     if(query)
    setproducts(products.filter((item: any) => item.name.includes(query)))
    else setproducts(ProductsQuery.data)
  }


  return (
    <SafeAreaView style={styles.container}>
      {ProductsQuery?.isLoading ?
        <View style={styles.ActivityIndicaterContainer}>
          <ActivityIndicator />
        </View> :
        <>
          <MainHeader headerText={'Products'} />
          <Textinput icon='search' value={search} setValue={(i: string) => onSearch(i)} PlaceHolder='search' />
          <FlatList
            data={products}
            renderItem={({ item }) => {
              return (<ProductCard item={item} />);
            }}
          />
        </>}
    </SafeAreaView>
  );
};
