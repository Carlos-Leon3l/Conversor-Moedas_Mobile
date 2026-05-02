import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.radii.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.s,
  },
  containerSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    color: '#000000',
    fontSize: theme.typography.sizes.medium,
    fontWeight: theme.typography.weights.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  }
});
