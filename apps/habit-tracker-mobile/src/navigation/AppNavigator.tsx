import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AppTabParamList } from './types';
import { colors } from '../theme/colors';
import { fontFamilies } from '../theme/typography';

import DashboardScreen from '../screens/dashboard/DashboardScreen';
import InsightsScreen from '../screens/insights/InsightsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.outline,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamilies.medium,
          fontSize: 11,
        },
        tabBarIcon: ({ color, size }) => {
          const icons: Record<keyof AppTabParamList, keyof typeof MaterialIcons.glyphMap> = {
            Dashboard: 'grid-view',
            Insights: 'bar-chart',
            Settings: 'settings',
          };
          return <MaterialIcons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
