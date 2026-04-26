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
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    marginVertical: theme.spacing.s,
  },
  containerSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowOpacity: 0,
    elevation: 0,
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    color: '#000000', // Preto para alto contraste com o Ciano Antigravity
    fontSize: theme.typography.sizes.medium,
    fontWeight: theme.typography.weights.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  }
});
