import {Platform, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {PlatformTest} from './platformTest.tsx';
import {AnimationTest} from './animationTest.tsx';
import {Key} from '../util/envKey.tsx';

export const Main = () => {
  return (
    <SafeAreaView className={'w-full h-full'}>
      <View className={'w-full h-full justify-center items-center bg-gray-300'}>
        <Text>플렛폼 : {Platform.OS}</Text>
        <Text>랜더 페이지 : main.tsx</Text>
        <PlatformTest />
        <View className={'border w-20 h-10'}>
          <View>
            <AnimationTest />
          </View>
        </View>
        <Text>{Key.TEST}</Text>
        <View className={'border absolute animate-spin'}>
          <Text>!23</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
