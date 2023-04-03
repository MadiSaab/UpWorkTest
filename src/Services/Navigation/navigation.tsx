import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {EamilScreen } from "../../Screens/EmailScreen/EmailScreen";
import { SCREENS } from "../Utils/constants";
import { heightToDp, isIPhoneX, widthToDp } from "../Utils/dimentions";
import { Text } from "react-native";
import { Image } from "react-native-svg";
import Icon from "react-native-dynamic-vector-icons";
import { ProductsScreen } from "../../Screens/ProductScreen/productSceen";

export const Navigation = () => {
  const Stack = createStackNavigator();
  
  const Tab = createBottomTabNavigator();



  const TabScreens = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor:'Black',
            paddingTop: isIPhoneX() ? heightToDp(1) : null,
            paddingBottom: isIPhoneX() ? heightToDp(2) : null,
          },
          tabBarLabelStyle: {fontSize: widthToDp(3)},
          tabBarIcon: ({focused}) => renderTabIcon(route, focused),
          tabBarLabel: ({focused}) => renderTabLabel(route, focused),
        })}>
        <Tab.Screen name="Product" component={ProductsScreen} />
        <Tab.Screen name="Email" component={EamilScreen} />
      </Tab.Navigator>
    );
  };

  const renderTabIcon = (route: any, focused: boolean) => {
    let iconName: string = 'Product';
    switch (route.name) {
      case 'Product':
        iconName = 'albums';
        break;
      case 'Email':
        iconName = 'mail-open';
        break;
    }
    return (
      <Icon name={iconName} type="Ionicons" size={30} color={focused ? 'orange' : 'black'} />
    );
  };
  
  const renderTabLabel = (route: any, focused: boolean) => {
    let Label: string = 'Home';
    switch (route.name) {
      case 'Product':
        Label = 'Product';
        break;
      case 'Email':
        Label = 'Email';
        break;
    }
    return (
      <Text
        style={{
          color:'black',
          fontSize: heightToDp(1.3),
        }}>
        {Label}
      </Text>
    );
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.PRODUCT_SCREEN}
        screenOptions={{ headerShown: false, header: () => null }}
      >
        <Stack.Screen name={'MainTab'} component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
);
};
