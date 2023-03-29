import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('alamariful1727@gmail.com');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Browse');
  };

  return (
    <SafeAreaView className="bg-typDarkBlue flex-1 justify-center items-center">
      <View className="w-10/12 space-y-8">
        <Text className="text-4xl text-white">Typhoon Login</Text>
        <View className="space-y-5">
          <TextInput
            className="bg-white p-3 text-xl leading-6 rounded-lg"
            placeholder="Enter your email"
            placeholderTextColor="grey"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <TextInput
            className="bg-white p-3 text-xl leading-6 rounded-lg"
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity className="bg-typGreen w-24 py-2 items-center rounded-full" onPress={handleLogin}>
          <Text className="text-2xl">Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
