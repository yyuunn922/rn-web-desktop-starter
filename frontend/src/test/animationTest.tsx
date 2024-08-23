import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export const AnimationTest = () => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    rotation.value = withTiming(360, {
      duration: 2000,
      easing: Easing.linear,
    });
  }, [rotation]);

  return <Animated.Text style={[animatedStyle]}>테스트</Animated.Text>;
};
