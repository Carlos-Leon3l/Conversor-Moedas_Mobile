import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function Botao({ label, onPress, variante = 'primary' }) {
  const isSecondary = variante === 'secondary';

  return (
    <TouchableOpacity 
      style={[styles.container, isSecondary && styles.containerSecondary]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, isSecondary && styles.textSecondary]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
