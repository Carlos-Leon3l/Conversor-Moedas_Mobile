import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.m,
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.regular,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
    fontWeight: theme.typography.weights.bold,
  },
  input: {
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.medium,
    padding: theme.spacing.m,
    fontSize: theme.typography.sizes.large,
    color: theme.colors.text,
    // Sombra sutil para destacar o card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  inputFocused: {
    borderColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.2,
  }
});
