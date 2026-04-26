import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
    paddingTop: theme.spacing.xl * 2, // Espaço para status bar
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.title,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.l,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  contentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  leftColumn: {
    flex: 1,
    minWidth: 300,
    maxWidth: 500,
    marginRight: theme.spacing.m,
  },
  rightColumn: {
    flex: 1,
    minWidth: 300,
    maxWidth: 500,
    maxHeight: 500, // Limite de altura para o histórico
  },
  card: {
    backgroundColor: 'transparent',
    padding: theme.spacing.l,
    marginBottom: theme.spacing.m,
    width: '100%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.m,
  },
  swapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.s,
    marginTop: theme.spacing.l,
  },
  swapIcon: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.title,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  errorText: {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.error,
    fontSize: theme.typography.sizes.small,
    marginBottom: theme.spacing.m,
    textAlign: 'center',
  },
  resultadoContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.m,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
    borderRadius: theme.radii.medium,
  },
  resultadoLabel: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.small,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  resultadoValor: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.title,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.primary,
  },
  botoesContainer: {
    marginTop: theme.spacing.s,
  }
});
