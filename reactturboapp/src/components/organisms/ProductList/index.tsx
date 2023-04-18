import React from 'react';
import {FlatList} from 'react-native';
import {products} from '../../../utils/provider';
import {ProductCard} from '../../molecules/ProductCard';

const ProductsList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={product => product?.id}
      renderItem={({item}) => <ProductCard {...item} />}
      contentContainerStyle={{paddingHorizontal: 4}}
    />
  );
};

export {ProductsList};
