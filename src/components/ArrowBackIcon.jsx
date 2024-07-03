
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ArrowBackIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
    <Image
      source={require('../../assets/arrow_back-black-24.png')}
      style={{ width: 24, height: 24, resizeMode: 'contain' }}
    />
  </TouchableOpacity>
);


export default ArrowBackIcon;