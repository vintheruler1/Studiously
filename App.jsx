import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white ">
      <TouchableOpacity className="bg-teal-500 p-3 rounded-lg shadow-md shadow-gray-400">
        <Text className="text-white text-3xl font-bold ">Hello World</Text>
      </TouchableOpacity>
      
      <StatusBar style="dark" />
    </View>
  );
}