import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleIcon } from '../icons/GoogleIcon';
import { AppleIcon } from '../icons/AppleIcon';
import { colors } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

interface Props {
  onGooglePress?: () => void;
  onApplePress?: () => void;
}

export function SocialAuthButtons({ onGooglePress, onApplePress }: Props) {
  return (
    <>
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
          <GoogleIcon size={20} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={onApplePress}>
          <AppleIcon size={20} color={colors.onSurface} />
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.outlineVariant,
    opacity: 0.4,
  },
  dividerText: {
    fontFamily: fontFamilies.medium,
    fontSize: 10,
    color: colors.outlineVariant,
    marginHorizontal: 10,
    letterSpacing: 1,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: 16,
    paddingVertical: 14,
  },
  socialButtonText: {
    fontFamily: fontFamilies.semiBold,
    fontSize: 14,
    color: colors.onSurface,
  },
});
