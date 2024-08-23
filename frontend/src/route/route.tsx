import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, View} from 'react-native';
import {Key} from '../util/envKey.tsx';
import {ScreenListData, RouteListEnum} from './routeList.ts';

const Stack = createNativeStackNavigator();
type ScreenConfig = {
  [key: string]: string;
};

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [Key.Domain!],
  config: {
    screens: ScreenListData.reduce<ScreenConfig>((acc, item) => {
      if (item.path) {
        acc[item.name] = item.path;
      }
      return acc;
    }, {} as ScreenConfig),
  },
};

export const Route = () => {
  return (
    <View className={'border h-full'}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={RouteListEnum.main}>
          {ScreenListData.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{
                title: item.title
                  ? item.title
                  : Platform.OS === 'web'
                  ? document.title
                  : '',
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
