import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
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
import Svg, { Path } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';

const C = {
  primary: '#006973',
  primaryDim: '#005c65',
  background: '#fbf9f2',
  surfaceContainerLow: '#f5f4ec',
  surfaceContainer: '#efeee5',
  surfaceContainerHigh: '#e9e9de',
  white: '#ffffff',
  onSurface: '#32332c',
  onSurfaceVariant: '#5f6057',
  outline: '#7b7b72',
  outlineVariant: '#b2b3a8',
};

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </Svg>
  );
}

function AppleIcon({ size = 20, color = '#32332c' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.1 16.78 3.07 9.85 5.67 6.4c1.23-1.55 2.85-2.33 4.34-2.33 1.25 0 2.22.46 2.97.46.73 0 2.04-.54 3.47-.4 1.5.15 2.8.74 3.65 1.95-3.1 1.83-2.6 6.14.47 7.42-1.02 2.62-2.4 5.33-3.52 7.18zM12.03 4.07c-.15-2.27 1.63-4.14 3.65-4.07.24 2.26-1.93 4.22-3.65 4.07z" fill={color} />
    </Svg>
  );
}

export default function SignUpLoginScreen() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator color={C.primary} />
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
          <MaterialIcons name="layers" size={48} color={C.primary} />
          <Text style={styles.brandName}>MindStack</Text>
          <Text style={styles.tagline}>ARCHITECT YOUR HABITS</Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>

          {/* Tab Switcher */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, !isLogin && styles.tabActive]}
              onPress={() => setIsLogin(false)}
            >
              <Text style={[styles.tabText, !isLogin && styles.tabTextActive]}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, isLogin && styles.tabActive]}
              onPress={() => setIsLogin(true)}
            >
              <Text style={[styles.tabText, isLogin && styles.tabTextActive]}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Inputs */}
          {!isLogin && (
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>FULL NAME</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Alex Rivera"
                placeholderTextColor={C.outlineVariant}
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
              placeholderTextColor={C.outlineVariant}
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
                placeholderTextColor={C.outlineVariant}
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
                  color={C.outline}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Primary CTA */}
          <TouchableOpacity activeOpacity={0.85} style={styles.primaryButtonWrapper}>
            <LinearGradient
              colors={[C.primary, C.primaryDim]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>
                {isLogin ? 'Log In' : 'Create Account'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <GoogleIcon size={20} />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AppleIcon size={20} color={C.onSurface} />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>

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
            source={require('../assets/avatar-sarah.png')}
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
    backgroundColor: C.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 32,
  },

  // Brand
  brandSection: {
    alignItems: 'center',
    marginBottom: 28,
  },
  brandName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 28,
    color: C.onSurface,
    letterSpacing: -0.5,
    marginTop: 8,
  },
  tagline: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: C.onSurfaceVariant,
    letterSpacing: 2,
    marginTop: 4,
  },

  // Card
  card: {
    backgroundColor: C.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },

  // Tabs
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: C.surfaceContainer,
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
    backgroundColor: C.primary,
  },
  tabText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: C.onSurfaceVariant,
  },
  tabTextActive: {
    color: '#eafcff',
  },

  // Inputs
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    color: C.onSurfaceVariant,
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  input: {
    backgroundColor: C.surfaceContainerLow,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: C.onSurface,
  },
  eyeButton: {
    position: 'absolute',
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },

  // Primary button
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
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 16,
    color: '#eafcff',
  },

  // Divider
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: C.outlineVariant,
    opacity: 0.4,
  },
  dividerText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    color: C.outlineVariant,
    marginHorizontal: 10,
    letterSpacing: 1,
  },

  // Social
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
    backgroundColor: C.surfaceContainerLow,
    borderRadius: 16,
    paddingVertical: 14,
  },
  socialButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: C.onSurface,
  },

  // Card footer
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFooterText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.onSurfaceVariant,
  },
  cardFooterLink: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: C.primary,
  },

  // Testimonial
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
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.onSurface,
    lineHeight: 20,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  testimonialAuthor: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    color: C.onSurfaceVariant,
    letterSpacing: 1,
  },

  copyright: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: C.outlineVariant,
    textAlign: 'center',
  },
});
