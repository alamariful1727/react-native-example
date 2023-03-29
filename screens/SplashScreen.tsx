import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const isAuth = false;

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    if (isAuth) {
      navigation.replace('Browse');
    } else {
      navigation.replace('Login');
    }
  }, []);

  return <StatusBar translucent backgroundColor="transparent" style="light" />;
};

export default SplashScreen;
