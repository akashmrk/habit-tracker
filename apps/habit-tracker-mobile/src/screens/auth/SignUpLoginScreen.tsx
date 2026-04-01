import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import { useFonts } from '../../hooks/useFonts';
import { AuthTabSwitcher } from '../../components/auth/AuthTabSwitcher';
import { SocialAuthButtons } from '../../components/auth/SocialAuthButtons';
import { colors } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function SignUpLoginScreen() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo + Brand */}
        <View style={styles.brandSection}>
          <MaterialIcons name="layers" size={48} color={colors.primary} />
          <Text style={styles.brandName}>MindStack</Text>
          <Text style={styles.tagline}>ARCHITECT YOUR HABITS</Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>
          <AuthTabSwitcher isLogin={isLogin} onToggle={setIsLogin} />

          {/* Inputs */}
          {!isLogin && (
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>FULL NAME</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Alex Rivera"
                placeholderTextColor={colors.outlineVariant}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="alex@example.com"
              placeholderTextColor={colors.outlineVariant}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <View>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor={colors.outlineVariant}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color={colors.outline}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Primary CTA */}
          <TouchableOpacity activeOpacity={0.85} style={styles.primaryButtonWrapper}>
            <LinearGradient
              colors={[colors.primary, colors.primaryDim]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>
                {isLogin ? 'Log In' : 'Create Account'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <SocialAuthButtons />

          {/* Footer link */}
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.cardFooterLink}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Testimonial */}
        <View style={styles.testimonial}>
          <Image
            source={require('../../../assets/avatar-sarah.png')}
            style={styles.avatarImage}
          />
          <View style={styles.testimonialTextBlock}>
            <Text style={styles.testimonialQuote}>
              "This system transformed my daily architecture. Habit stacking is finally effortless."
            </Text>
            <Text style={styles.testimonialAuthor}>SARAH JENKINS, ARCHITECT</Text>
          </View>
        </View>

        <Text style={styles.copyright}>MindStack © 2024 • Structural Habit Formation</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 32,
  },
  brandSection: {
    alignItems: 'center',
    marginBottom: 28,
  },
  brandName: {
    fontFamily: fontFamilies.heading,
    fontSize: 28,
    color: colors.onSurface,
    letterSpacing: -0.5,
    marginTop: 8,
  },
  tagline: {
    fontFamily: fontFamilies.medium,
    fontSize: 11,
    color: colors.onSurfaceVariant,
    letterSpacing: 2,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: fontFamilies.semiBold,
    fontSize: 10,
    color: colors.onSurfaceVariant,
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontFamily: fontFamilies.regular,
    fontSize: 15,
    color: colors.onSurface,
  },
  eyeButton: {
    position: 'absolute',
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  primaryButtonWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 20,
  },
  primaryButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontFamily: fontFamilies.heading,
    fontSize: 16,
    color: colors.primaryText,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFooterText: {
    fontFamily: fontFamilies.regular,
    fontSize: 13,
    color: colors.onSurfaceVariant,
  },
  cardFooterLink: {
    fontFamily: fontFamilies.semiBold,
    fontSize: 13,
    color: colors.primary,
  },
  testimonial: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingHorizontal: 4,
    marginBottom: 24,
  },
  avatarImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    flexShrink: 0,
  },
  testimonialTextBlock: {
    flex: 1,
  },
  testimonialQuote: {
    fontFamily: fontFamilies.regular,
    fontSize: 13,
    color: colors.onSurface,
    lineHeight: 20,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  testimonialAuthor: {
    fontFamily: fontFamilies.semiBold,
    fontSize: 10,
    color: colors.onSurfaceVariant,
    letterSpacing: 1,
  },
  copyright: {
    fontFamily: fontFamilies.regular,
    fontSize: 11,
    color: colors.outlineVariant,
    textAlign: 'center',
  },
});
