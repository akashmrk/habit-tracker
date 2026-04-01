import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Auth stack: Landing → Onboarding → SignUpLogin
export type AuthStackParamList = {
  Landing: undefined;
  OnboardingStep1: undefined;
  OnboardingStep2: undefined;
  OnboardingStep3: undefined;
  SignUpLogin: undefined;
};

// Main app bottom tabs
export type AppTabParamList = {
  Dashboard: undefined;
  Insights: undefined;
  Settings: undefined;
};

// Habit stack inside app (full-screen modals/pushes)
export type HabitStackParamList = {
  HabitDetail: { habitId: string };
  HabitCompletion: { habitId: string };
};

// Root navigator switches between auth and app
export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

// Convenience prop types for screens
export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  BottomTabScreenProps<AppTabParamList, T>;
