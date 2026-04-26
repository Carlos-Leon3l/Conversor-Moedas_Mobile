import React from 'react';
import { useConversorMoedas } from '../../hooks/useConversorMoedas';
import { ConversorScreen } from './index';

export function ConversorContainer() {
  const hookState = useConversorMoedas();

  return <ConversorScreen {...hookState} />;
}
