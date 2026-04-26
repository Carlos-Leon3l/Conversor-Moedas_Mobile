import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/theme';

export function InputPersonalizado({ label, valor, onChangeText, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={valor}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        keyboardType="numeric"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
