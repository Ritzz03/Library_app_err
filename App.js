import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Issues_Returns from './screens/Issues_Returns'
import Search from'./screens/Search'
import {AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {
  return (
      <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Search:Search,
  Transactions:Issues_Returns,
},{
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon:({color}) => {
      const routeName = navigation.state.routeName
      if(routeName === "Transactions"){
        return(
          <AntDesign name='book' size={26} color={color}/>
        )
      }else if(routeName === "Search"){
        return(
          <MaterialCommunityIcons name="book-search" size={26}  color={"#8022d9"}/>
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)
