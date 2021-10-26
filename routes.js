import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login'
import Home from './src/pages/home'
import Filme from './src/pages/filme'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="Home"  component={HomeTabs} />
                <Stack.Screen options={{headerShown:false}} name="Filme" component={Filme} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const HomeTabs = () => {
    return (
    <Tab.Navigator shifting={false} initialRouteName="Home" activeColor={"#fff"} barStyle={{backgroundColor:'#141414'}}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel:'Início',
            tabBarIcon: ({color}) => <Icon name='home' color={color} size={26}/>}} 
        />
        <Tab.Screen name="Pesquisar" component={Home} options={{
            tabBarLabel:'Pesquisar',
            tabBarIcon: ({color}) => <Icon name='magnify' color={color} size={26}/>}} 
        />
        <Tab.Screen name="Em_Breve" component={Home} options={{
            tabBarLabel:'Em Breve',
            tabBarIcon: ({color}) => <Icon name='play-speed' color={color} size={26}/>}} 
        />
        <Tab.Screen name="Download" component={Home} options={{
            tabBarLabel:'Download',
            tabBarIcon: ({color}) => <Icon name='download' color={color} size={26}/>}} 
        />
        <Tab.Screen name="Mais" component={Home} options={{
            tabBarLabel:'Mais',
            tabBarIcon: ({color}) => <Icon name='menu' color={color} size={26}/>}} 
        />                                
    </Tab.Navigator>
    );
}


export default Routes;
