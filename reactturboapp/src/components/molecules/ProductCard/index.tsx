import {useColorScheme} from 'nativewind';
import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductCard = ({image, category, title, price, description}: any) => {
  const [count, setCount] = useState(1);
  const {colorScheme} = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 mt-4">
      <View className="bg-white rounded-xl">
        <Image
          source={{uri: image}}
          className="w-full h-72"
          style={{resizeMode: 'contain'}}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between">
          <View className="flex-row gap-3">
            <Icon
              name="minus"
              size={20}
              color={colorScheme === 'light' ? 'black' : 'white'}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white font-bold">{count}</Text>
            <Icon
              name="plus"
              size={20}
              color={colorScheme === 'light' ? 'black' : 'white'}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>
        <TouchableOpacity className="flex-row justify-center self-center w-10/12 bg-black dark:bg-white p-3 rounded-full mt-4">
          <Text className="text-white dark:text-black font-bold">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {ProductCard};
