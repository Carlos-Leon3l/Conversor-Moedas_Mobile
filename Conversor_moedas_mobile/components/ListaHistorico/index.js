import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

export function ListaHistorico({ dados }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.valoresContainer}>
        <Text style={styles.valorTexto}>
          {item.valorOrigem} ➔ {item.valorDestino}
        </Text>
        <Text style={styles.dataTexto}>{item.data}</Text>
      </View>
      <View>
        <Text style={styles.moedasTexto}>{item.moedaOrigem} / {item.moedaDestino}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico Recente</Text>
      {dados.length === 0 ? (
        <Text style={styles.emptyTexto}>Nenhuma conversão realizada ainda.</Text>
      ) : (
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
