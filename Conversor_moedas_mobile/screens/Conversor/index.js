import React from 'react';
import { View, Text, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { InputPersonalizado } from '../../components/InputPersonalizado';
import { SeletorMoeda } from '../../components/SeletorMoeda';
import { Botao } from '../../components/Botao';
import { ListaHistorico } from '../../components/ListaHistorico';
import { styles } from './styles';
import { formatarMoeda } from '../../utils/formatadores';

export function ConversorScreen({ 
  valor, 
  setValor, 
  moedaOrigem, 
  setMoedaOrigem, 
  moedaDestino, 
  setMoedaDestino, 
  resultado, 
  historico, 
  erro, 
  converterValor, 
  inverterMoedas, 
  limparValores 
}) {
  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} 
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Conversor</Text>

        <View style={styles.contentWrapper}>
          <View style={styles.leftColumn}>
            <View style={styles.card}>
              <InputPersonalizado 
                label="Valor para converter"
                valor={valor}
                onChangeText={setValor}
              />

          <View style={styles.row}>
            <SeletorMoeda 
              label="De:"
              valorSelecionado={moedaOrigem}
              onValueChange={setMoedaOrigem}
            />
            
            <TouchableOpacity style={styles.swapContainer} onPress={inverterMoedas}>
              <Text style={styles.swapIcon}>⇄</Text>
            </TouchableOpacity>

            <SeletorMoeda 
              label="Para:"
              valorSelecionado={moedaDestino}
              onValueChange={setMoedaDestino}
            />
          </View>

          {!!erro && <Text style={styles.errorText}>{erro}</Text>}

          {resultado !== null && (
            <View style={styles.resultadoContainer}>
              <Text style={styles.resultadoLabel}>Resultado:</Text>
              <Text style={styles.resultadoValor}>
                {formatarMoeda(resultado, moedaDestino)}
              </Text>
            </View>
          )}

          <View style={styles.botoesContainer}>
            <Botao label="Converter" onPress={converterValor} />
            <Botao label="Limpar" variante="secondary" onPress={limparValores} />
          </View>
        </View>
      </View>

          <View style={styles.rightColumn}>
            <ListaHistorico dados={historico} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
