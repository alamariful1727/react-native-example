import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ChevronLeftIcon, MagnifyingGlassIcon, XCircleIcon } from 'react-native-heroicons/solid';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen = ({ navigation }: Props) => {
  const [query, setQuery] = useState('Iron Man');

  return (
    <SafeAreaView className="bg-typDarkBlue flex-1">
      <View className="px-5 py-3 flex-row justify-between items-center space-x-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon fill="white" size={28} />
        </TouchableOpacity>
        <View className="flex-1 flex-row items-center space-x-2 px-2 bg-white rounded">
          <MagnifyingGlassIcon fill="black" size={20} />
          <TextInput
            placeholder="Search"
            keyboardType="default"
            className="flex-1 h-10 font-medium"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          {query.length && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <XCircleIcon fill="black" size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text className="text-white">SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
