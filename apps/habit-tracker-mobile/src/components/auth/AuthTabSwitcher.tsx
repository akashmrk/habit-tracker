import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

interface Props {
  isLogin: boolean;
  onToggle: (isLogin: boolean) => void;
}

export function AuthTabSwitcher({ isLogin, onToggle }: Props) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, !isLogin && styles.tabActive]}
        onPress={() => onToggle(false)}
      >
        <Text style={[styles.tabText, !isLogin && styles.tabTextActive]}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, isLogin && styles.tabActive]}
        onPress={() => onToggle(true)}
      >
        <Text style={[styles.tabText, isLogin && styles.tabTextActive]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceContainer,
    borderRadius: 100,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 100,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontFamily: fontFamilies.medium,
    fontSize: 14,
    color: colors.onSurfaceVariant,
  },
  tabTextActive: {
    color: colors.primaryText,
  },
});
