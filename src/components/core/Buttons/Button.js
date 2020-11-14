import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

const Button = ({variant, label, onPress}) => {
  const backgroundColor = variant === 'primary' ? '#ffff' : '#991B86';
  const color = variant === 'primary' ? 'black' : '#fff';
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
