import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Switch} from 'react-native';
import {useColorScheme} from 'nativewind';
import {ProductsList} from '../../components';

export const BookmarkScreen = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-400 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
        <Text className="text-2xl dark:text-white font-bold">Bookmarks</Text>
      </View>
      <ProductsList />
    </SafeAreaView>
  );
};
