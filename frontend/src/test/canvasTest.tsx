import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Box, OrbitControls} from '@react-three/drei';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const CanvasTest = () => {
  return (
    <View className={'border h-full relative'}>
      <Icon name={'stepforward'} />
      <Canvas>
        <OrbitControls />
        <Box />
      </Canvas>
    </View>
  );
};
