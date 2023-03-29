import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Browse'>;

const BrowseScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="bg-typDarkBlue flex-1">
      <View className="px-5 py-3 flex-row justify-between">
        <Image source={require('../assets/typhoon.png')} className="h-8 w-36" />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <MagnifyingGlassIcon fill="white" size={28} />
        </TouchableOpacity>
      </View>
      <Text className="text-2xl text-center text-white">Typhoon On Demand</Text>
    </SafeAreaView>
  );
};

export default BrowseScreen;
