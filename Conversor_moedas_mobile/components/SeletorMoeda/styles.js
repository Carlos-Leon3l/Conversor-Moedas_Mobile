import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.small,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    fontWeight: theme.typography.weights.bold,
  },
  pickerContainer: {
    backgroundColor: '#E0F7FA',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.medium,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#000000',
  }
});
