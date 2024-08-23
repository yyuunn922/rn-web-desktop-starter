import {Platform, Text} from 'react-native';

export const PlatformTest = () => {
  if (Platform.OS === 'web') {
    return <Text>웹</Text>;
  } else {
    return <Text>모바일</Text>;
  }
};
