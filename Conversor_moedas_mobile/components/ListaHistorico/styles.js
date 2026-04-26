import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: theme.spacing.l,
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.medium,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radii.medium,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  valoresContainer: {
    flex: 1,
  },
  valorTexto: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.regular,
    color: theme.colors.text,
    fontWeight: theme.typography.weights.bold,
  },
  dataTexto: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.small,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  moedasTexto: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.small,
    color: theme.colors.primary,
    fontWeight: theme.typography.weights.bold,
  },
  emptyTexto: {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  }
});
