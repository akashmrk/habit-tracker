import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';

// TODO: restore when Landing screen is built
// import LandingScreen from '../screens/onboarding/LandingScreen';
// import OnboardingStep1Screen from '../screens/onboarding/OnboardingStep1Screen';
// import OnboardingStep2Screen from '../screens/onboarding/OnboardingStep2Screen';
// import OnboardingStep3Screen from '../screens/onboarding/OnboardingStep3Screen';
import SignUpLoginScreen from '../screens/auth/SignUpLoginScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpLogin" component={SignUpLoginScreen} />
      {/* TODO: uncomment when onboarding screens are built
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="OnboardingStep1" component={OnboardingStep1Screen} />
      <Stack.Screen name="OnboardingStep2" component={OnboardingStep2Screen} />
      <Stack.Screen name="OnboardingStep3" component={OnboardingStep3Screen} />
      */}
    </Stack.Navigator>
  );
}
