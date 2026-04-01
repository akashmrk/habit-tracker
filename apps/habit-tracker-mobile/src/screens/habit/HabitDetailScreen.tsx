import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default function HabitDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Habit Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  label: { color: colors.onSurface },
});
