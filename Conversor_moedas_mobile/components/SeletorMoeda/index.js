import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { MOEDAS } from '../../utils/constantes';

export function SeletorMoeda({ label, valorSelecionado, onValueChange }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={valorSelecionado}
          onValueChange={onValueChange}
          style={styles.picker}
        >
          {MOEDAS.map((moeda) => (
            <Picker.Item 
              key={moeda.id} 
              label={`${moeda.id} - ${moeda.nome}`} 
              value={moeda.id} 
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}
