import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../components/colors';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../assets/avi/avatar.png';
import {CardProps} from '../components/Cards/types';
import BalanceScreen from '../screens/BalanceScreen';
import {Icon} from '@rneui/themed';
export type RootStackParamList = {
  WelcomeScreen: undefined;
  HomeScreen: undefined;
  BalanceScreen: CardProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.graylight,
        },
        headerTintColor: colors.secondary,
        headerShadowVisible: false,
        headerTransparent: true,
        headerRight: () => (
          <Profile
            img={Avi}
            imgContainerStyle={{backgroundColor: colors.tertiary}}
          />
        ),
      }}
      initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerTitle: props => {
            return (
              <Greeting
                mainText="Hey Coby!"
                subText="Welcome back"
                {...props}
              />
            );
          },
          headerLeft: () => <></>,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="BalanceScreen"
        component={BalanceScreen}
        options={({route}) => ({
          headerTitle: route?.params?.alias,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <Icon
              name="chevron-back"
              type="ionicon"
              size={25}
              color={colors.secondary}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
