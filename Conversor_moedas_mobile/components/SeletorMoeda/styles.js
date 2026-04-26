import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.small,
    color: '#000000',
    marginBottom: theme.spacing.xs,
    fontWeight: theme.typography.weights.bold,
  },
  pickerContainer: {
    backgroundColor: '#E0F7FA', // Azul claro para os menus suspensos
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.medium,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  picker: {
    height: 50,
    color: '#000000', // Texto preto para contrastar com o azul claro
  }
});
